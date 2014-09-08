//This module is what we use to properly format out JSON responses
var serializers = {};

serializers.formatCalendarList = function(calendarList) {
  var formatted = {items: []};
  calendarList = JSON.parse(calendarList);

  calendarList.items.forEach(function(cal) {
    var formattedCal = {};
    formattedCal.id = cal.id;
    formattedCal.title = cal.summary;
    formattedCal.color = cal.backgroundColor.replace('#', '');
    formattedCal.writeable = cal.accessRole === ("writer" || "owner");
    formattedCal.selected = cal.selected;
    formattedCal.timezone = cal.timeZone;
    formatted.items.push(formattedCal);
  });
  return formatted;
};


serializers.formatEventList = function(body) {
  var formatted = {items: []};
  calendar = JSON.parse(body);

  calendar.items.forEach(function(event) {
    var formattedEvent = {};
    formattedEvent.id = event.id;
    formattedEvent.status = event.status;
    formattedEvent.title = event.summary;
    formattedEvent.start = event.start;
    formattedEvent.end = event.end;
    formattedEvent.location =  event.location;
    formattedEvent.attendees = formatAttendees(event.attendees);
    formattedEvent.organizer = formatPerson(event.organizer);
    formattedEvent.writeable = calendar.accessRole === ("writer" || "owner");
    formatted.items.push(formattedEvent);
  });
  return formatted;
};


//Internal functions do not need to be exposed.
var formatAttendees = function(attendees) {
  if(!attendees) { return []; }
  var formatted = [];
  attendees.forEach(function(attendee) {
    formattedAttendee = formatPerson(attendee);
    formattedAttendee.rsvpStatus = attendee.responseStatus;
    formatted.push(formattedAttendee);
  });
  return formatted;
};

var formatPerson = function(person) {
  formattedPerson = {};
  formattedPerson.name = person.displayName;
  formattedPerson.emails = [person.email];
  formattedPerson.self = person.self || false;
  return formattedPerson;
};

module.exports = serializers;
