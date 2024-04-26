// component structure

our components are broken into 3 -

AdminToggle - has the admin toggle button

- has a antd Switch (toggle) btn initially was admin mode (false) 
- and toggled state was stored in app.js level in order to pass the state into produceList Component where the table and actions are disabled if toggle value is true


DashboardView - has the data representation of productList as a dashboard view

 - in dashboard view we are calculating - totalPrice, noOfProduct, outOfStocks, noOfCategory
 - then passing those data into dashboardTile(commonlyUsed for all the Tile) have toPass - label, value, icon


ProductListView - contains table like structure (product list table)
 - contains table like representation of productList data has 3 actions edit, delete, disabled
 - when edit Btn clicked A Modal gets opened the we can make changes in the list
 - when disabled Btn clicked disabled Row is being name sent to the redux state (disableList) 
 - has one common function which checks if current row name was not included in disabledList and the user was admin if not it disables the row


// State Management

used redux toolkit as State Management tool

has two main state
disableList - contains disabled row names
productList - contains productList Array



