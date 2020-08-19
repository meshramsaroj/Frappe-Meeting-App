
frappe.views.calendar["Test"] = {
	field_map: {
		"start": "start",
		"end": "end",
		"id": "name",
		"title": "title",
		"docstatus": 1
	},
	get_events_method: "test_app.api.get_test_meetings"
}