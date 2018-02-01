// Global Functions
// Accessible to application because index.jade extends layout.jade which
// -- imports the public folder

// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();
    // Username link click
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

    // Delete User link click
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {
        // Stick all our returned user data into a userlist variable in the global object
        // Best that we can access it without repeatedly whaling 
        // --on the database each time we click a name in our table.
        // --not recommended for future applications
        userListData = data;
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.FirstName + '">' + this.FirstName + '</a></td>';
            tableContent += '<td>' + this.LastName + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

// Show Member Info
// Table on the Left Hand Side
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisFirstName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.FirstName; }).indexOf(thisFirstName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoFirstName').text(thisUserObject.FirstName);
    $('#userInfoLastName').text(thisUserObject.LastName);
    $('#userInfoAge').text(thisUserObject.Age);
    $('#userInfoSex').text(thisUserObject.Sex);
    $('#userInfoBiggestProblemintheRegion').text(thisUserObject.BiggestProblemintheRegion);
    $('#userInfoHowcanweaddressandimprovethesituation').text(thisUserObject.Howcanweaddressandimprovethesituation);


};



