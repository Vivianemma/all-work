const dash_image = localStorage.getItem("dash_image");
    const name = localStorage.getItem("name");

    
    _('#user_dash_name_goal').innerHTML = `Welcome : ${name}`;
    _('#user_dash_img_goal').innerHTML = ` 
              <a id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              <img src="http://res.cloudinary.com/getfiledata/image/upload/v1552380958/${dash_image}">
              </a>`;
