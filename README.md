This is the personal website for harpist Gabriella Jones

How to add more concerts. 

Navigate to the file named `concertSchedule.json`

You can find it in `src/information/concertSchedule.json`

When you click on it, you are met with a lot of writing. 

This writing is ordered by year (the most recent year being first), and then by month (early in the year, to later in the year).

Add in the details, following the *exact same structure* as the previous gigs. Looks something like this: 


```
{
    "id": "1",
    "date": "30th",
    "dateMonth": "March",
    "year": "2022",
    "city": "London",
    "venue": "St James' Piccadilly",
    "repertoire": "Solo Recital",
    "start_time": "1.10pm",
    "ticket_link": "https://www.sjp.org.uk/"
  },
```

a little note: you can use the above as a copy/paste reference. The struture needs to be exactly the same. 

If this is the last entry, you must *omit* the final comma (`,`)