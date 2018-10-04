class UI{

  constructor(){
    this.profile = document.getElementById('profile');
    }
    showProfile(user)
    {
      this.profile.innerHTML =`
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}"  target="_blank" class="btn btn-primary btn-block mb-4" > View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary"> Public Repos: ${user.public_repos?user.public_repos:0}</span>
            <span class="badge badge-secondary"> Public Gists: ${user.public_gists?user.public_gists:0}</span>
            <span class="badge badge-success"> Followers: ${user.followers?user.followers:0}</span>
            <span class="badge badge-info"> Following: ${user.following?user.following:0}</span>
            <br><br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company?user.company:'N/A'}</li>
              <li class="list-group-item">Website/Blog: ${user.blog?user.blog:'N/A'}</li>
              <li class="list-group-item">Location: ${user.location?user.location:'N/A'}</li>
              <li class="list-group-item" >Member Since: ${user.created_at?user.created_at:'N/A'}</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
      `; 
    }

    //Show repos
    showRepos(repos){

      let output = '';

      repos.forEach(function(repo){
        output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
      });

      document.getElementById('repos').innerHTML = output;
    }

    ///clear profile
    clearProfile(){
      this.profile.innerHTML = '';
    }

    //Show Alert
    showAlert(msg, className){

      //Clear Remaining Alert
      this.clearAlertMsg();
      const div =  document.createElement('div');
      div.className = className;
      div.appendChild(document.createTextNode(msg));

      const container = document.querySelector('.searchContainer');
      const search = document.querySelector('.search');

      container.insertBefore(div, search);

      //Timeout after 3 sec
      setTimeout(() =>{
        this.clearAlertMsg();
      }, 3000);
    }

    //Cleart Alert Message
    clearAlertMsg(){
      const curAlt = document.querySelector('.alert');
      if(curAlt){
        curAlt.remove();
      } 
    }
  }
