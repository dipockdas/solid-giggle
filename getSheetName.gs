// Function gets the sheetname so you can use it in your spreadsheet formula

function sheetName() {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
}
