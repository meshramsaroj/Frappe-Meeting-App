# -*- coding: utf-8 -*-
# Copyright (c) 2020, frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class Test(Document):
  def validate(self):
    found = []
    for attendee in self.attendees:
      print("---------------------------------------",attendee)
      # print("-----------------------",self.attendee.as_dict())
      if not attendee.full_name:
        attendee.full_name = get_fullName(attendee.attendees)

      if attendee.attendees in found:
        frappe.throw(("Attendee {0} entered twice").format(attendee.attendees))

      found.append(attendee.attendees)

@frappe.whitelist()
def get_fullName(attendee):
  user = frappe.get_doc("User", attendee)
  return " ".join(filter(None, [user.first_name, user.middle_name, user.last_name]))
