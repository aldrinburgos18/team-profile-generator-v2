function generatePage(manager, engineer, intern) {
  console.log(intern);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <div class="jumbotron jumbotron-fluid bg-danger">
            <div class="container">
              <h1 class="display-4 text-center text-white">My Team</h1>
            </div>
          </div>
    </header>

    <main>
        <div class="cards-container">
           <div class="card bg-primary" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-white font-weight-bold">${
                manager.name
              }</h5>
              <p class="card-text text-white"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cup-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
              </svg>   Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: <a href="mailto: ${
                manager.email
              }">${manager.email}</a></li>
              <li class="list-group-item">Office number: ${
                manager.officeNumber
              }</li>
            </ul>
          </div>
          
          ${generateEngineer(engineer)}
          ${generateIntern(intern)}
        </div>
    </main>
</body>
</html>`;
}

function generateEngineer(engineer) {
  engineerData = "";
  for (var i = 0; i < engineer.length; i++) {
    engineerData += `
    <div class="card bg-primary" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-white font-weight-bold">${engineer[i].name}</h5>
    <p class="card-text text-white"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eyeglasses" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M4 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
    </svg>   Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer[i].id}</li>
    <li class="list-group-item">Email: <a href="mailto: ${engineer[i].email}">${engineer[i].email}</a></li>
    <li class="list-group-item">Github: <a href="http://www.github.com/${engineer[i].github}" target="_blank">{{ engineer.github }}</a></li>
  </ul>
 </div>`;
  }
  return engineerData;
}

function generateIntern(intern) {
  internData = "";

  for (var i = 0; i < intern.length; i++) {
    internData += `<div class="card bg-primary" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title text-white font-weight-bold">${intern[i].name}</h5>
                  <p class="card-text text-white"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-book-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                  </svg>   Intern</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern[i].id}</li>
                  <li class="list-group-item">Email: <a href="mailto: ${intern[i].email}">${intern[i].email}</a></li>
                  <li class="list-group-item">School: ${intern[i].school}</li>
                </ul>
               </div>
`;
  }
  return internData;
}

module.exports = generatePage;
