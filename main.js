const get = function (selector) {
  return document.querySelector(selector);
};

const viewAllComments = get('.comment-link');
const heart = document.querySelectorAll('.fa-heart');
const post = get('.post');
const showOthers = get('.others');


const comments = [
  {
    username: 'e.mendrala',
    profilePicture: 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    comment: 'reminds me of road trips through the countryside',
    replies: [
      {
        username: 'nostalgic_nina',
        profilePicture: 'https://images.unsplash.com/photo-1686771434157-7d488edc8415?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        comment: 'OMG yes! You just unlocked a core memory for me 😆😆',
      },
      {
        username: 'cloudwatcher89',
        profilePicture: 'https://images.unsplash.com/photo-1718306502553-0108d0bc36c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        comment: 'Agreed!',
      }
    ]
  },
  {
    username: 'nature_lover23',
    profilePicture: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    comment: 'such a perfect place..',
    replies: [
      {
        username: 'serene_minds',
        profilePicture: 'https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        comment: 'Imagine just lying here and listening to the wind… 😌',
      },
      {
        username: 'sunny_days55',
        profilePicture: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        comment: 'Golden hour here must be unreal!',
      }
    ]
  },
  {
    username: 'sunset_sophie',
    profilePicture: 'https://images.unsplash.com/photo-1507281736509-c6289f1ea0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    comment: 'Bet it looks even better at sunset!',
    replies: [
      {
        username: 'techy_tim',
        profilePicture: 'https://images.unsplash.com/photo-1554630981-a73ffb5ed6f8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        comment: 'LOL! Literally thought the same thing ',
      },
      {
        username: 'simplicity_seek',
        profilePicture: 'https://images.unsplash.com/photo-1464295440335-ee082a75ccca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        comment: 'just nature. perfect🌿🌿🌿',
      }
    ]
  }
];


viewAllComments.addEventListener("click", function () {


    
  const commentBox = document.createElement('div');
  commentBox.classList.add('comments');

  commentBox.innerHTML = `
    <div class="comment-list flex column full-width full-height">
    
      <div class="comment-header flex align-items-center justify-content-center row full-width">
        <i class="icons close-comments pointer fa-solid fa-angle-left"></i>
        <p>Comments</p>
        <i class="icons fa-regular fa-paper-plane pointer"></i>
      </div>

      <div class="comment-container full-height">
      </div>  

      <div class="new-comment">
        <ul class="emojis flex">
          <li class="emoji pointer">😃</li>
          <li class="emoji pointer">✨</li>
          <li class="emoji pointer">❤️</li>
          <li class="emoji pointer">😄</li>
          <li class="emoji pointer">🔥</li>
          <li class="emoji pointer">🤣</li>
          <li class="emoji pointer">🤔</li>
          <li class="emoji pointer">😎</li>
        </ul>
        <div class="write-comment flex align-items-center justify-content-center">
          <img
            class="profile-picture align-items-center"
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <input type="text" placeholder="Add a comment..." class="comment-input"></input>
        </div>
      </div>
    </div>`;

  post.appendChild(commentBox);

  const commentContainer = document.querySelector('.comment-container');

  comments.forEach(function(comment) {
    const singleComent = document.createElement('div');
    singleComent.innerHTML = `
      <div class ="comment flex">
        <img
          class="profile-picture align-items-center"
          src="${comment.profilePicture}"
        />
        <div class="comment-information">
          <p class="user medium-bold-font">${comment.username}</p>
          <p class="comment-text very-thin-font">${comment.comment}</p>
          <p class="reply-button very-thin-font pointer">Reply</p>
        </div>
        <i class="icons fa-regular fa-heart pointer"></i>
      </div>
    `;

    commentContainer.appendChild(singleComent);

    let isReplyOn = false;

    const replyButton = singleComent.querySelector('.reply-button');
    replyButton.addEventListener('click', function() {

      

      if (isReplyOn === false) {

        console.log('its off');
        isReplyOn = true;

        comment.replies.forEach(function(reply) {
          const replyBox = document.createElement('div');
  
          replyBox.innerHTML = `
            <div class ="reply flex">
              <img
                class="profile-picture align-items-center"
                src="${reply.profilePicture}"
              />
              <div class="reply-comment-information">
                <p class="user medium-bold-font">${reply.username}</p>
                <p class="comment-text very-thin-font">${reply.comment}</p>
                <p class="reply-button very-thin-font pointer">Reply</p>
              </div>
              <i class="icons fa-regular fa-heart pointer"></i>
            </div>
          `;
          singleComent.appendChild(replyBox);
        });

      } else {

        console.log('reply is on');
        isReplyOn = false;

        replyBox.remove();
        
        
      }




     
    });
  });
  
  const closeComments = commentBox.querySelector('.close-comments');
    closeComments.addEventListener('click', function() {
      commentBox.remove();
  });
});


showOthers.addEventListener("click", function () {
    
  const likeList = document.createElement('div');
  likeList.classList.add('likes');

  likeList.innerHTML = `
    <div class="like-list full-width full-height">
    
    <div class="likes-header flex align-items-center justify-content-center row full-width">
      <i class="close-likes pointer fa-solid fa-angle-left"></i>
      <p>Likes</p>
      <i class="fa-regular fa-paper-plane pointer"></i>
    </div>

      <div class ="user">
        <p class="username">user 1</p>
      <div>
      
      <div class ="user">
        <p class="username">user 2</p>
      <div>
    </div>`;

  post.appendChild(likeList);

  const closeLikes = likeList.querySelector('.close-likes');

  closeLikes.addEventListener('click', function() {
    likeList.remove();
  })
});
