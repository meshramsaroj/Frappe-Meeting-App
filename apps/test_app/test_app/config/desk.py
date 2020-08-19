from __future__ import unicode_literals
from frappe import _


def get_data():
    return [
        {
            "label": _("Tools"),
            "icon": "octicon octicon-briefcase",
            "items": [
                    {
                        "type": "doctype",
                        "name": "Test",
                        "label": _("Test App"),
                        "description": _("Prepare Invitation for user , Attendees,Minutes"),
                        "onboard": 1,
                    },
            ]
        }
    ]