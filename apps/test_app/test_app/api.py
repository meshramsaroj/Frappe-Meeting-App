import frappe
from frappe import _
from frappe.utils import nowdate ,add_days


@frappe.whitelist()
def send_invitation_email(test):
    test = frappe.get_doc("Test", test)
    test.check_permission("email")
    if(test.status == "Planned"):
        frappe.sendmail(
            recipients=[d.attendees for d in test.attendees],
            sender=frappe.session.user,
            subject=test.title,
            message=test.invitation_message,
            reference_doctype=test.doctype,
            reference_name=test.name

        )

        test.status = "Invitation Sent"
        test.save()

        frappe.msgprint(_("Invitation Sent"))

    else:
        frappe.msgprint(_("Meeting status must be Planned"))


@frappe.whitelist()
def get_test_meetings(start, end):
    if not frappe.has_permission("Test", "read"):
        raise frappe.PermissionError

    return frappe.db.sql("""select
                         timestamp(`date`, from_date) as start,
                         timestamp(`date`, to_date) as end ,
                         name,
                         title,
                         status,
                         0 as all_day
                         from `tabTest` where `date` between %(start)s and %(end)s  """,
                         {
                             "start": start,
                             "end": end
                         },
                         as_dict=True
                         )


def make_orientation_meeting(doc,method):

    test = frappe.get_doc({
        "doctype": "Test",
        "title":"Orientation for {0}".format(doc.first_name),
        "date": add_days(nowdate(),1),
        "from_time": "09:00",
        "to_time":"09:30",
        "status": "Planned",
        "attendees": [{
            "attendees":doc.name
        }]
    })

    test.flags.ignore_permission = True
    test.insert()

    frappe.msgprint(_("Orientation meeting created"))
