/**
 * Google Apps Script for Resume Visitor Notifications
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com
 * 2. Create new project
 * 3. Paste this code
 * 4. Deploy as Web App (Execute as Me, Anyone can access)
 * 5. Copy the Web App URL
 * 6. Update visitor-tracker.js with the URL
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var message = data.message || "Visitor on resume";
    var visitor = data.visitor || {};
    
    // Send email notification
    var subject = "🎯 Resume Visitor Alert!";
    var body = message + "\n\n" + 
               "Timestamp: " + new Date().toLocaleString() + "\n" +
               "Page: " + (visitor.page || "Unknown") + "\n" +
               "Referrer: " + (visitor.referrer || "Direct") + "\n" +
               "Platform: " + (visitor.platform || "Unknown") + "\n" +
               "Screen: " + (visitor.screenSize || "Unknown");
    
    // Send to your email
    MailApp.sendEmail("tpawley2001@gmail.com", subject, body);
    
    // Also log to Google Sheet (optional)
    logToSheet(visitor);
    
    return ContentService.createTextOutput(JSON.stringify({
      "success": true,
      "message": "Notification sent"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      "success": false,
      "error": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function logToSheet(visitor) {
  try {
    // Create or open spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      ss = SpreadsheetApp.create("Resume Visitor Log");
    }
    
    var sheet = ss.getSheets()[0];
    if (sheet.getLastRow() === 0) {
      // Add headers
      sheet.appendRow(["Timestamp", "Page", "Referrer", "Platform", "Screen", "Language"]);
    }
    
    // Log visitor data
    sheet.appendRow([
      new Date(),
      visitor.page || "",
      visitor.referrer || "",
      visitor.platform || "",
      visitor.screenSize || "",
      visitor.language || ""
    ]);
  } catch (e) {
    console.log("Sheet logging error: " + e);
  }
}

// Test function
function testNotification() {
  var testData = {
    message: "🎯 Test notification from resume",
    visitor: {
      page: "https://tpawley2001.github.io/ai-resume/",
      referrer: "Direct",
      platform: "Test",
      screenSize: "1920x1080",
      language: "en-US"
    }
  };
  
  MailApp.sendEmail(
    "tpawley2001@gmail.com",
    "🎯 Resume Visitor Alert!",
    testData.message + "\n\nTest visitor data logged."
  );
  
  console.log("Test email sent!");
}
