'use strict';



function displayResults(responseJson) {
  console.log(responseJson[0].owner.login + " OWNER CONSOLE LOG");
  console.log(responseJson.length);
  console.log(responseJson[0].owner.url + " OWNER CONSOLE LOG");

  $('#resultsList').empty();
  $('#usernameSpot').empty();

  $('#usernameSpot').append(
        `
        <h2>username: ${responseJson[0].owner.login}</h2>
        `
      )

  for(let i = 0; i < responseJson.length; i++) {

    $('#resultsList').append(
      `
      <li><h3>${responseJson[i].name}</h3></li>
      <li><h3><a href="${responseJson[i].html_url}">${responseJson[i].html_url}</h3></li>

      `
    )
  }

    $('#hideSomething').removeClass('hideSomething')
  }

function getUser(searchName){


  const headerInfo = {
    headers: {
      'Accept' : 'application/vnd.github.v3+json'
    }
  }


  fetch(`https://api.github.com/users/${searchName}/repos`, headerInfo)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Oh no, something went wrong!'))
}

function submitButtonClick() {
  $('form').submit(event => {
    event.preventDefault();
    console.log('hello submit');
    const searchName = $('#jsUserInput').val();
    console.log(searchName);
    getUser(searchName);
  });
}


$(submitButtonClick)