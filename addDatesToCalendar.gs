/* This function will create an all day event on a Google calendar 
   from a specific cell in a Google Spreadsheet. Just run the function on the active sheet
   to create the entries
*/


function addDatesToCalendar(){

  var spreadsheet = SpreadsheetApp.getActiveSheet();
  
  // Update these values to match your spreadsheet
  const spreadSheetRange = "A2:M17"    // the spreadsheet range you want to grab
  const eventName = 0;    // Cell number with the name of the event
  const eventDate = 12;   // Cell number with the date of the event
  const calendarID = 'PUT_YOUR_CALENDAR_ID_HERE';   // the ID of the calendar to update
  // end of the bits you need to update  

  const eventCal = CalendarApp.getCalendarById(calendarID);
  const earnings = spreadsheet.getRange(spreadSheetRange).getValues();

  earnings.forEach(earning => {
      eventCal.createAllDayEvent(earning[eventName],  new Date(earning[eventDate]));
  })

}
