LIVE CODING

Search input with autocomplete

The UI/UX designer decided that search by account input needs
to be more user-friendly.

They have their mind made on a ‘simple’ autocomplete search box.
What’s not so simple and not obvious to the designer,
is that you have a huge dataset of possible results that would
not be feasible to store on the client side.

Your task is to create a component that listens to user input events
and shows a list of possible matches.

Task 1:

Write a search box component with autocomplete.
The list of possible options is on the client’s side.

Task 2:

The designer wants the list to only show the accounts that includes
the search term entered by the user. Moreover he has a desire
to highlight matches in the list of results.

Task 3:

As you remember you store a list of options on the client’s side.
This list can be really huge. How to avoid glitches and delays?
Please, improve the performance of your component if it is needed.

Task 4:

Unfortunately some users can have more than 1 mln accounts.
As a result the request for such options list is too slow.
Please, add an opportunity to work with your component in
asynchronous mode.

Task 5:

Some requests for options list can fail.
The designer would like to give feedback to users in that case.



