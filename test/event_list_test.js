// NOTE: this test must be run by itself because the proxyquire library is
// quirky like that.
var proxyquire = require('proxyquire');
//This is the fake data we will be returning
var eventList = {
 "kind": "calendar#events",
 "etag": "\"1410179376874000\"",
 "summary": "alexandernfeinberg@gmail.com",
 "updated": "2014-09-08T12:29:36.874Z",
 "timeZone": "America/New_York",
 "accessRole": "owner",
 "defaultReminders": [
  {
   "method": "popup",
   "minutes": 30
  },
  {
   "method": "email",
   "minutes": 30
  }
 ],
 "nextSyncToken": "CJCE0MbP0cACEJCE0MbP0cACGAU=",
 "items": [
  {
   "kind": "calendar#event",
   "etag": "\"2779793737074000\"",
   "id": "h9hjkl5a21pdmgg369v32rbkl0",
   "status": "tentative",
   "htmlLink": "https://www.google.com/calendar/event?eid=aDloamtsNWEyMXBkbWdnMzY5djMycmJrbDAgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-01-16T18:27:48.000Z",
   "updated": "2014-01-16T18:27:48.614Z",
   "summary": "Dentist",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2013-12-30T11:00:00-05:00"
   },
   "end": {
    "dateTime": "2013-12-30T12:00:00-05:00"
   },
   "iCalUID": "h9hjkl5a21pdmgg369v32rbkl0@google.com",
   "sequence": 1,
   "attendees": [
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "organizer": true,
     "self": true,
     "responseStatus": "accepted"
    }
   ],
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 10
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2793823097468000\"",
   "id": "9qkvdjbc1663kkn3sdmnedffdo",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=OXFrdmRqYmMxNjYza2tuM3NkbW5lZGZmZG8gYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-04-07T15:53:38.000Z",
   "updated": "2014-04-07T22:59:08.734Z",
   "summary": "Feinberg / IDEXX screen",
   "description": "At 11:00 am on Wednesday, Ivan Novikov and Aggie Kelly will call Alex Feinberg at 617-717-9633. \n\nIf something should go awry, please contact me at 207-699-1335. \n\nThanks, Lance",
   "location": "617-717-9633",
   "creator": {
    "email": "lance_davis@base36.com",
    "displayName": "Lance Davis"
   },
   "organizer": {
    "email": "lance_davis@base36.com",
    "displayName": "Lance Davis"
   },
   "start": {
    "dateTime": "2014-04-09T11:00:00-04:00"
   },
   "end": {
    "dateTime": "2014-04-09T11:30:00-04:00"
   },
   "iCalUID": "9qkvdjbc1663kkn3sdmnedffdo@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "lance_davis@base36.com",
     "displayName": "Lance Davis",
     "organizer": true,
     "responseStatus": "accepted"
    },
    {
     "email": "alexander-kelly@idexx.com",
     "responseStatus": "accepted"
    },
    {
     "email": "ivan-novikov@idexx.com",
     "responseStatus": "accepted"
    },
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "accepted"
    }
   ],
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2793823143366000\"",
   "id": "8s6em2k7ecelcf71jvi0iu2oqc",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=OHM2ZW0yazdlY2VsY2Y3MWp2aTBpdTJvcWMgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-04-07T18:50:16.000Z",
   "updated": "2014-04-07T22:59:31.683Z",
   "summary": "Alex at Rez-1",
   "description": "Alex Feinberg will visit Rez-1 on Thursday at 2pm. He will ask for Jim Glatiotis upon arrival. \n\nShould something go awry, please call Mike Sherwood at 207-415-7102",
   "location": "100 William Street Suite 100 Wellesley, MA 02481",
   "creator": {
    "email": "lance_davis@base36.com",
    "displayName": "Lance Davis"
   },
   "organizer": {
    "email": "lance_davis@base36.com",
    "displayName": "Lance Davis"
   },
   "start": {
    "dateTime": "2014-04-10T14:00:00-04:00"
   },
   "end": {
    "dateTime": "2014-04-10T15:00:00-04:00"
   },
   "iCalUID": "8s6em2k7ecelcf71jvi0iu2oqc@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "jglatiotis@rez1.com",
     "responseStatus": "accepted"
    },
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "accepted"
    },
    {
     "email": "lance_davis@base36.com",
     "displayName": "Lance Davis",
     "organizer": true,
     "responseStatus": "accepted"
    }
   ],
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2798107017700000\"",
   "id": "npodngvofujaau13otts1nqths",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=bnBvZG5ndm9mdWphYXUxM290dHMxbnF0aHMgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-05-01T21:35:15.000Z",
   "updated": "2014-05-02T17:58:28.850Z",
   "summary": "Alex Feinberg WDI Interview",
   "description": "617-717-9633",
   "location": "617-717-9633",
   "creator": {
    "email": "floyd@generalassemb.ly",
    "displayName": "Floyd Miller"
   },
   "organizer": {
    "email": "floyd@generalassemb.ly",
    "displayName": "Floyd Miller"
   },
   "start": {
    "dateTime": "2014-05-02T14:00:00-04:00"
   },
   "end": {
    "dateTime": "2014-05-02T14:30:00-04:00"
   },
   "iCalUID": "npodngvofujaau13otts1nqths@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "accepted"
    },
    {
     "email": "floyd@generalassemb.ly",
     "displayName": "Floyd Miller",
     "organizer": true,
     "responseStatus": "accepted"
    }
   ],
   "hangoutLink": "https://plus.google.com/hangouts/_/generalassemb.ly/floyd?hceid=ZmxveWRAZ2VuZXJhbGFzc2VtYi5seQ.npodngvofujaau13otts1nqths",
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2798704712350000\"",
   "id": "qa2r5acg6o8f99og5p2vtlni9g",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=cWEycjVhY2c2bzhmOTlvZzVwMnZ0bG5pOWcgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-05-05T12:52:19.000Z",
   "updated": "2014-05-06T04:59:16.175Z",
   "summary": "WDI In-Person Interviews (Alex Feinberg)",
   "location": "GA Boston, 51 Melcher Street, Boston, MA 02210",
   "creator": {
    "email": "matt.brendzel@generalassemb.ly",
    "displayName": "Matt Brendzel"
   },
   "organizer": {
    "email": "matt.brendzel@generalassemb.ly",
    "displayName": "Matt Brendzel"
   },
   "start": {
    "dateTime": "2014-05-08T13:30:00-04:00"
   },
   "end": {
    "dateTime": "2014-05-08T15:00:00-04:00"
   },
   "iCalUID": "qa2r5acg6o8f99og5p2vtlni9g@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "matt.brendzel@generalassemb.ly",
     "displayName": "Matt Brendzel",
     "organizer": true,
     "responseStatus": "accepted"
    },
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "accepted"
    }
   ],
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2814403037156000\"",
   "id": "eaat15b8dk55mlv05dbmv2iu0k",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=ZWFhdDE1YjhkazU1bWx2MDVkYm12Mml1MGsgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-07-30T20:29:49.000Z",
   "updated": "2014-08-05T01:18:38.578Z",
   "summary": "Headshots!",
   "creator": {
    "email": "hang@generalassemb.ly",
    "displayName": "Hang Nguyen"
   },
   "organizer": {
    "email": "hang@generalassemb.ly",
    "displayName": "Hang Nguyen"
   },
   "start": {
    "dateTime": "2014-08-04T17:30:00-04:00"
   },
   "end": {
    "dateTime": "2014-08-04T19:30:00-04:00"
   },
   "iCalUID": "eaat15b8dk55mlv05dbmv2iu0k@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "hang@generalassemb.ly",
     "displayName": "Hang Nguyen",
     "organizer": true,
     "responseStatus": "accepted"
    },
    {
     "email": "wdi-bos-apr14@ga-groups.com",
     "displayName": "WDI BOS-03",
     "responseStatus": "needsAction"
    },
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "accepted"
    },
    {
     "email": "wdi-bos-jun14@ga-groups.com",
     "displayName": "WDI BOS-04",
     "responseStatus": "needsAction"
    }
   ],
   "hangoutLink": "https://plus.google.com/hangouts/_/generalassemb.ly/hang?hceid=aGFuZ0BnZW5lcmFsYXNzZW1iLmx5.eaat15b8dk55mlv05dbmv2iu0k",
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2816228450170000\"",
   "id": "tocopepvha6ofinqhc3om5p5vo",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=dG9jb3BlcHZoYTZvZmlucWhjM29tNXA1dm8gYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-08-14T14:24:58.000Z",
   "updated": "2014-08-15T14:50:25.085Z",
   "summary": "NYC Outcomes Call + Boston WDI Grads!",
   "creator": {
    "email": "katieh@generalassemb.ly",
    "displayName": "Katie Hudson"
   },
   "organizer": {
    "email": "katieh@generalassemb.ly",
    "displayName": "Katie Hudson"
   },
   "start": {
    "dateTime": "2014-08-15T11:00:00-04:00"
   },
   "end": {
    "dateTime": "2014-08-15T11:30:00-04:00"
   },
   "iCalUID": "tocopepvha6ofinqhc3om5p5vo@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "jakeaust07@gmail.com",
     "displayName": "Jake Austin",
     "responseStatus": "accepted"
    },
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "accepted"
    },
    {
     "email": "nnovak13@gmail.com",
     "displayName": "N N",
     "responseStatus": "accepted"
    },
    {
     "email": "katieh@generalassemb.ly",
     "displayName": "Katie Hudson",
     "organizer": true,
     "responseStatus": "accepted"
    },
    {
     "email": "hbanton@gmail.com",
     "displayName": "Harry",
     "responseStatus": "needsAction"
    }
   ],
   "hangoutLink": "https://plus.google.com/hangouts/_/generalassemb.ly/boston2nyc?hceid=a2F0aWVoQGdlbmVyYWxhc3NlbWIubHk.tocopepvha6ofinqhc3om5p5vo",
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2818554298684000\"",
   "id": "vac2ge59vavqolh50m2e1gojq0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=dmFjMmdlNTl2YXZxb2xoNTBtMmUxZ29qcTAgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-08-20T16:01:32.000Z",
   "updated": "2014-08-29T01:52:29.342Z",
   "summary": "Outcomes Check-In ",
   "creator": {
    "email": "hang@generalassemb.ly",
    "displayName": "Hang Nguyen"
   },
   "organizer": {
    "email": "hang@generalassemb.ly",
    "displayName": "Hang Nguyen"
   },
   "start": {
    "dateTime": "2014-09-16T18:00:00-04:00"
   },
   "end": {
    "dateTime": "2014-09-16T19:30:00-04:00"
   },
   "iCalUID": "vac2ge59vavqolh50m2e1gojq0@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "needsAction"
    },
    {
     "email": "hang@generalassemb.ly",
     "displayName": "Hang Nguyen",
     "organizer": true,
     "responseStatus": "accepted"
    },
    {
     "email": "wdi-bos-jun14@ga-groups.com",
     "displayName": "WDI BOS-04",
     "responseStatus": "needsAction"
    }
   ],
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819405861291000\"",
   "id": "_6lhj8cr370qj6bb26gs3cb9k60rj8bb16opj0bb56thmcdhi74sjeoj66c",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZsaGo4Y3IzNzBxajZiYjI2Z3MzY2I5azYwcmo4YmIxNm9wajBiYjU2dGhtY2RoaTc0c2plb2o2NmMgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T00:08:50.000Z",
   "updated": "2014-09-03T00:08:50.701Z",
   "summary": "Liveintent",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-03T13:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-03T14:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "5c43c853-b486-4074-a630-e7cf62997bf3",
   "sequence": 0,
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819406475316000\"",
   "id": "_6gp6achmcli3eb9l6thj8b9k75hm4bb174o3cb9nckp32dhj6kojgcb26g",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZncDZhY2htY2xpM2ViOWw2dGhqOGI5azc1aG00YmIxNzRvM2NiOW5ja3AzMmRoajZrb2pnY2IyNmcgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T00:13:57.000Z",
   "updated": "2014-09-03T00:13:57.705Z",
   "summary": "Jeff pulver",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-08T18:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-08T19:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "42e26ed7-57c4-49cb-a906-7e21635181b4",
   "sequence": 0,
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819406661197000\"",
   "id": "_6ksjep356th36b9jc8rjib9kc8pjeb9p6dhm8bb474pm2dhmchhm4cpl6s",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZrc2plcDM1NnRoMzZiOWpjOHJqaWI5a2M4cGplYjlwNmRobThiYjQ3NHBtMmRobWNoaG00Y3BsNnMgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T00:15:30.000Z",
   "updated": "2014-09-03T00:15:30.643Z",
   "summary": "Hacker hours",
   "location": "142 West 36th Street, 142 W 36th St, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-04T18:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-04T19:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "597de7b3-3b79-4b37-93cd-d93a66dcb357",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"142 West 36th Street\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"142 W 36th St\"},\"geometry\":{\"location\":{\"lat\":40.7516644,\"lng\":-73.9887402}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 15
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819406920874000\"",
   "id": "_c5h30p9i6kp6abb371gmcb9k68s64b9pccs30bb4cli30or6cpj38ob2cc",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=X2M1aDMwcDlpNmtwNmFiYjM3MWdtY2I5azY4czY0YjlwY2NzMzBiYjRjbGkzMG9yNmNwajM4b2IyY2MgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T00:17:20.000Z",
   "updated": "2014-09-03T00:18:00.229Z",
   "summary": "Sunday's @ projective les",
   "location": "72 Allen Street 3rd floor",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-07T13:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-07T14:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "ab0e252e-c8af-428b-9c80-ded0cfff4abc",
   "sequence": 1,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"72 Allen Street 3rd floor\"}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819406782387000\"",
   "id": "_6oo3ep1mckrjcb9lc5hmcb9k6cpm8b9pccpm6b9ncgp66e316opm2dpmcc",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZvbzNlcDFtY2tyamNiOWxjNWhtY2I5azZjcG04YjlwY2NwbTZiOW5jZ3A2NmUzMTZvcG0yZHBtY2MgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T00:12:20.000Z",
   "updated": "2014-09-03T00:20:41.492Z",
   "summary": "NYC.rb",
   "location": "Pivotal Labs, 625 Avenue of the Americas, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-09T19:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-09T21:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "607d6e76-5acf-433d-9c3c-7d2c8a63a76c",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"Pivotal Labs\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"625 Avenue of the Americas\"},\"geometry\":{\"location\":{\"lat\":40.74028,\"lng\":-73.995083}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819409320181000\"",
   "id": "_c8pjap1m6pj3ibb56cq64b9kcgq36b9o75j3ebb16hi3ae1hccojgcj56g",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=X2M4cGphcDFtNnBqM2liYjU2Y3E2NGI5a2NncTM2YjlvNzVqM2ViYjE2aGkzYWUxaGNjb2pnY2o1NmcgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T00:37:39.000Z",
   "updated": "2014-09-03T00:37:40.440Z",
   "summary": "Reid",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-11T12:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-11T13:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "b35d66f9-e34b-4d43-89f7-a4d581c182e4",
   "sequence": 0,
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819496812362000\"",
   "id": "_clim6dpocphjabb6cgr6cb9k6oqj0b9oc8p64b9hcdimcd1m65hjcd9m6g",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=X2NsaW02ZHBvY3BoamFiYjZjZ3I2Y2I5azZvcWowYjlvYzhwNjRiOWhjZGltY2QxbTY1aGpjZDltNmcgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T12:46:46.000Z",
   "updated": "2014-09-03T12:46:46.181Z",
   "summary": "Dental hackathon",
   "location": "Grind, 419 Park Ave S, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "date": "2014-09-13"
   },
   "end": {
    "date": "2014-09-14"
   },
   "iCalUID": "eec78fc5-fd6f-4650-8b2b-1cef461c6564",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"Grind\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"419 Park Ave S\"},\"geometry\":{\"location\":{\"lat\":40.743688,\"lng\":-73.983346}}}"
    }
   },
   "reminders": {
    "useDefault": false
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819497318137000\"",
   "id": "_68r3ic1n75hm6bb2cgqjeb9k6crjgbb268pj2b9ic8o6adb574o34dhn74",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzY4cjNpYzFuNzVobTZiYjJjZ3FqZWI5azZjcmpnYmIyNjhwajJiOWljOG82YWRiNTc0bzM0ZGhuNzQgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T12:50:58.000Z",
   "updated": "2014-09-03T12:50:59.166Z",
   "summary": "Code the deal lead up",
   "location": "Stillwater Bar & Grill, 78-80 E 4th St, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-04T19:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-04T22:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "269079cc-bd57-4378-b231-2b0e5e902679",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"Stillwater Bar & Grill\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"78-80 E 4th St\"},\"geometry\":{\"location\":{\"lat\":40.726255,\"lng\":-73.989886}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 15
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819497492891000\"",
   "id": "_6gqj6c36ckr68bb46hgj2b9kc9gjcb9o64sj4bb56kpj0dpo6gs3ae1jco",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZncWo2YzM2Y2tyNjhiYjQ2aGdqMmI5a2M5Z2pjYjlvNjRzajRiYjU2a3BqMGRwbzZnczNhZTFqY28gYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T12:52:26.000Z",
   "updated": "2014-09-03T12:52:26.471Z",
   "summary": "Code the deal",
   "location": "Dev Bootcamp NYC, 48 Wall St, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-19T19:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-19T20:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "4530fe6d-d4a1-4ba6-8192-e5307848583f",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"Dev Bootcamp NYC\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"48 Wall St\"},\"geometry\":{\"location\":{\"lat\":40.706496,\"lng\":-74.009113}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819499951772000\"",
   "id": "bh3vevat1jj47d0ovfcs4gicgc",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=YmgzdmV2YXQxamo0N2Qwb3ZmY3M0Z2ljZ2MgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-02T15:34:41.000Z",
   "updated": "2014-09-03T13:12:55.886Z",
   "summary": "Alexander SDE Coffee at Amorino",
   "description": "Thanks,\n\nAndrea",
   "location": "Amorino, University Avenue, New York, NY",
   "creator": {
    "email": "andrea@seemuse.com",
    "displayName": "Andrea Riposati"
   },
   "organizer": {
    "email": "andrea@seemuse.com",
    "displayName": "Andrea Riposati"
   },
   "start": {
    "dateTime": "2014-09-04T11:30:00-04:00"
   },
   "end": {
    "dateTime": "2014-09-04T12:00:00-04:00"
   },
   "iCalUID": "bh3vevat1jj47d0ovfcs4gicgc@google.com",
   "sequence": 1,
   "attendees": [
    {
     "email": "andrea@seemuse.com",
     "displayName": "Andrea Riposati",
     "organizer": true,
     "responseStatus": "accepted"
    },
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "accepted"
    }
   ],
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819453053408000\"",
   "id": "_6kqmaohk6kp32b9h70q68b9k71h32b9p60pjib9m65hjid1i70r32phi74",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZrcW1hb2hrNmtwMzJiOWg3MHE2OGI5azcxaDMyYjlwNjBwamliOW02NWhqaWQxaTcwcjMycGhpNzQgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T00:10:11.000Z",
   "updated": "2014-09-03T13:14:01.716Z",
   "summary": "Muse/art",
   "location": "Amorino, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-04T11:30:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-04T12:30:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "55eb4521-184d-48b1-9039-61c942861f29",
   "sequence": 1,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"Amorino\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\"},\"geometry\":{\"location\":{\"lat\":40.732884,\"lng\":-73.993891}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819527355381000\"",
   "id": "_74ojapj575i3ebb16gom8b9kc4sjabb275gjgbb56hhm4d9m6osj8chncc",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=Xzc0b2phcGo1NzVpM2ViYjE2Z29tOGI5a2M0c2phYmIyNzVnamdiYjU2aGhtNGQ5bTZvc2o4Y2huY2MgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-03T17:01:17.000Z",
   "updated": "2014-09-03T17:01:17.726Z",
   "summary": "Katie",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-03T16:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-03T17:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "915fe9d7-a41d-4a95-b9a8-e4cb5669427c",
   "sequence": 0,
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 15
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819563173054000\"",
   "id": "is5457pou4gkd6o3dheogj4gds",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=aXM1NDU3cG91NGdrZDZvM2RoZW9najRnZHMgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-08-20T16:00:54.000Z",
   "updated": "2014-09-03T21:59:46.527Z",
   "summary": "Outcomes Check-In",
   "creator": {
    "email": "hang@generalassemb.ly",
    "displayName": "Hang Nguyen"
   },
   "organizer": {
    "email": "hang@generalassemb.ly",
    "displayName": "Hang Nguyen"
   },
   "start": {
    "dateTime": "2014-09-03T18:00:00-04:00"
   },
   "end": {
    "dateTime": "2014-09-03T19:30:00-04:00"
   },
   "iCalUID": "is5457pou4gkd6o3dheogj4gds@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "hang@generalassemb.ly",
     "displayName": "Hang Nguyen",
     "organizer": true,
     "responseStatus": "accepted"
    },
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "declined"
    },
    {
     "email": "wdi-bos-jun14@ga-groups.com",
     "displayName": "WDI BOS-04",
     "responseStatus": "needsAction"
    }
   ],
   "hangoutLink": "https://plus.google.com/hangouts/_/generalassemb.ly/outcomes-check?hceid=aGFuZ0BnZW5lcmFsYXNzZW1iLmx5.is5457pou4gkd6o3dheogj4gds",
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819709596422000\"",
   "id": "_6ph66pj66pj3abb2cosm4b9kchhjab9ochhm8b9j68omao9icosjcc1h70",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZwaDY2cGo2NnBqM2FiYjJjb3NtNGI5a2NoaGphYjlvY2hobThiOWo2OG9tYW85aWNvc2pjYzFoNzAgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-04T18:19:58.000Z",
   "updated": "2014-09-04T18:19:58.245Z",
   "summary": "Railsbridge",
   "location": "Dev Bootcamp NYC, 48 Wall St, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-26T18:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-26T21:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "6bcff6f5-bf9b-4dc5-8dcd-321ea2f96018",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"Dev Bootcamp NYC\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"48 Wall St\"},\"geometry\":{\"location\":{\"lat\":40.706496,\"lng\":-74.009113}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 15
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819709653138000\"",
   "id": "_65i30pj16opjeb9h74oj0b9kcpijgb9p64rj4bb4c8o3ge1g6hhjap35c4",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzY1aTMwcGoxNm9wamViOWg3NG9qMGI5a2NwaWpnYjlwNjRyajRiYjRjOG8zZ2UxZzZoaGphcDM1YzQgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-04T18:20:26.000Z",
   "updated": "2014-09-04T18:20:26.597Z",
   "summary": "Railsbridge",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-27T09:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-27T17:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "1d0fa637-1910-4fe8-9172-db08804c5dea",
   "sequence": 0,
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 15
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819734557396000\"",
   "id": "_cgs3icpi60o64b9g6crjeb9k70sjcbb164o66b9p74o38cj56kpjie9icc",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=X2NnczNpY3BpNjBvNjRiOWc2Y3JqZWI5azcwc2pjYmIxNjRvNjZiOXA3NG8zOGNqNTZrcGppZTlpY2MgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-04T21:47:55.000Z",
   "updated": "2014-09-04T21:48:02.161Z",
   "summary": "Happy hour",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-05T17:30:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-05T18:30:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "d893200b-0377-4896-a10c-99042e53992c",
   "sequence": 0,
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819832819784000\"",
   "id": "_c4rjgeb26gq62bb565j30b9k6sqj0bb2cpj3ibb6c4o3adr56ko38dpic4",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=X2M0cmpnZWIyNmdxNjJiYjU2NWozMGI5azZzcWowYmIyY3BqM2liYjZjNG8zYWRyNTZrbzM4ZHBpYzQgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-05T11:26:49.000Z",
   "updated": "2014-09-05T11:26:49.972Z",
   "summary": "Reid",
   "location": "Bloomberg LP, 731 Lexington Ave, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-05T12:05:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-05T13:05:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "a789b44a-e1f0-4750-bff9-fa057e50472a",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"Bloomberg LP\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"731 Lexington Ave\"},\"geometry\":{\"location\":{\"lat\":40.761662,\"lng\":-73.96805}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 15
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819832837873000\"",
   "id": "_6tgjgp346th6abb36kr3ab9k71h36bb168om4b9i6cq38db174p3ichn6o",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0Z2pncDM0NnRoNmFiYjM2a3IzYWI5azcxaDM2YmIxNjhvbTRiOWk2Y3EzOGRiMTc0cDNpY2huNm8gYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-05T11:26:58.000Z",
   "updated": "2014-09-05T11:26:58.962Z",
   "summary": "Max?",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-05T16:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-05T17:00:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "7a8dd7be-c565-48b3-a21b-23445a929276",
   "sequence": 0,
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 15
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2819844250690000\"",
   "id": "_61h36d1gc8sj4bb36dgj4b9kc4smcbb2cgq3cb9m74om6p9gcli66c1n68",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzYxaDM2ZDFnYzhzajRiYjM2ZGdqNGI5a2M0c21jYmIyY2dxM2NiOW03NG9tNnA5Z2NsaTY2YzFuNjggYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-05T13:02:05.000Z",
   "updated": "2014-09-05T13:02:05.396Z",
   "summary": "Testing performance",
   "location": "The Flatiron School, 11 Broadway, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-11T18:45:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-11T20:45:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "0b340b92-c3a2-4a9f-bd46-691ce0edc072",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"The Flatiron School\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"11 Broadway\"},\"geometry\":{\"location\":{\"lat\":40.705397,\"lng\":-74.013924}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2820121531044000\"",
   "id": "bh617aekfpkdrjs1fo1cfq12jg",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=Ymg2MTdhZWtmcGtkcmpzMWZvMWNmcTEyamcgYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-08-20T16:01:08.000Z",
   "updated": "2014-09-07T03:32:45.522Z",
   "summary": "Outcomes Check-In",
   "creator": {
    "email": "hang@generalassemb.ly",
    "displayName": "Hang Nguyen"
   },
   "organizer": {
    "email": "hang@generalassemb.ly",
    "displayName": "Hang Nguyen"
   },
   "start": {
    "dateTime": "2014-09-10T18:00:00-04:00"
   },
   "end": {
    "dateTime": "2014-09-10T19:30:00-04:00"
   },
   "iCalUID": "bh617aekfpkdrjs1fo1cfq12jg@google.com",
   "sequence": 0,
   "attendees": [
    {
     "email": "wdi-bos-jun14@ga-groups.com",
     "displayName": "WDI BOS-04",
     "responseStatus": "needsAction"
    },
    {
     "email": "hang@generalassemb.ly",
     "displayName": "Hang Nguyen",
     "organizer": true,
     "responseStatus": "accepted"
    },
    {
     "email": "alexandernfeinberg@gmail.com",
     "displayName": "Alex Feinberg",
     "self": true,
     "responseStatus": "needsAction"
    }
   ],
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"2820358753513000\"",
   "id": "_6himad316opj8b9ncos36b9k68pmcbb1clh3ib9k6lgjecj6c8qj6c9j68",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzZoaW1hZDMxNm9wajhiOW5jb3MzNmI5azY4cG1jYmIxY2xoM2liOWs2bGdqZWNqNmM4cWo2YzlqNjggYWxleGFuZGVybmZlaW5iZXJnQG0",
   "created": "2014-09-08T12:29:36.000Z",
   "updated": "2014-09-08T12:29:36.803Z",
   "summary": "Katie",
   "location": "General Assembly West, 10 E 21 St, New York, NY, US",
   "creator": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "organizer": {
    "email": "alexandernfeinberg@gmail.com",
    "displayName": "Alex Feinberg",
    "self": true
   },
   "start": {
    "dateTime": "2014-09-09T16:20:00-04:00",
    "timeZone": "America/New_York"
   },
   "end": {
    "dateTime": "2014-09-09T17:20:00-04:00",
    "timeZone": "America/New_York"
   },
   "iCalUID": "4ee4a634-7f83-423f-aeb9-45a72fb53132",
   "sequence": 0,
   "extendedProperties": {
    "shared": {
     "sunrise:place": "{\"name\":\"General Assembly West\",\"address\":{\"city\":\"New York\",\"country\":\"US\",\"state\":\"NY\",\"street\":\"10 E 21 St\"},\"geometry\":{\"location\":{\"lat\":40.739934,\"lng\":-73.990082}}}"
    }
   },
   "reminders": {
    "useDefault": false,
    "overrides": [
     {
      "method": "popup",
      "minutes": 60
     }
    ]
   }
  }
 ]
};

var expect = require('Chai').expect;
var Q = require('q');
var request = Q.denodeify(require('request'));
//stub the request.get method in google.
var google = proxyquire('../lib/services/google', {
  'request': {
    get: function(opts, callback) {
      //make the async call
      setTimeout( function() {callback(null, {}, JSON.stringify(eventList)); }, 10);
    }
  }
});
var serializers = require('../lib/services/serializers');
var server = require('../app.js');
var express;


describe('getting event list', function () {
  before(function () {
    express = server.listen(8000);
  });

  it('should give me json of my event list', function (done) {
    var accessToken = 'abc';

    request('http://localhost:8000/calendars/primary/events?accessToken=' + accessToken, function(err, response, body) {
      //can only compare strings, not objects
      expect(response.body).to.equal(JSON.stringify(serializers.formatEventList(JSON.stringify(eventList))));
    });
    done();
  });

  after(function () {
     express.close();
   });
});
