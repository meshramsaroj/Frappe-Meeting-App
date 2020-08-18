// Copyright (c) 2020, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Test Attendees', {
	attendees: function(frm,cdt,cdn){
	  var attendee = frappe.model.get_doc(cdt,cdn);
	  console.log(attendee);
	  //if attendee , get full name
	  if(attendee.attendees){
		  console.log(attendee.attendees);
		frm.call({
		  // calling the serverside function get_fullName
		  method:"test_app.test_app.doctype.test.test.get_fullName",
		  // passing argument

		  args:   {
			attendee : attendee.attendees
		  }  ,
		  // what will return
		  callback : function(r){
			// it will return and set full_name =  return full_name
			frappe.model.set_value(cdt,cdn,"full_name",r.message);
		  }
		});
	  }
	  else {
		// if no attendee ,clear full name
		//it will set full_name = " "
		frappe.model.set_value(cdt,cdn,"full_name",null);
	  }

	}
  });