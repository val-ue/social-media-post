import { faker } from "https://cdn.skypack.dev/@faker-js/faker@v8.3.0";

const get = function (selector) {
  return document.querySelector(selector);
};

const viewAllComments = get(".comment-link");
const hearts = document.querySelectorAll(".fa-heart");
const bookmark = document.querySelector(".fa-bookmark");
const post = get(".post");
const showOthers = get(".others");
const seeMore = get(".see-more");
const likeNumber = get(".like-number");
const commentNumber = get(".comment-number");
const spotlight = get(".spotlight");

const comments = [
  {
    username: faker.internet.userName(),
    profilePicture: faker.image.urlPicsumPhotos(),
    comment: "reminds me of road trips through the countryside",
    replies: [
      {
        username: faker.internet.userName(),
        profilePicture: faker.image.urlPicsumPhotos(),
        comment: "OMG yes! You just unlocked a core memory for me 😆😆"
      },
      {
        username: faker.internet.userName(),
        profilePicture: faker.image.urlPicsumPhotos(),
        comment: "Agreed!"
      }
    ]
  },
  {
    username: faker.internet.userName(),
    profilePicture: faker.image.urlPicsumPhotos(),
    comment: "such a perfect place..",
    replies: [
      {
        username: faker.internet.userName(),
        profilePicture: faker.image.urlPicsumPhotos(),
        comment: "Imagine just lying here and listening to the wind… 😌"
      },
      {
        username: faker.internet.userName(),
        profilePicture: faker.image.urlPicsumPhotos(),
        comment: "Golden hour here must be unreal!"
      }
    ]
  },
  {
    username: faker.internet.userName(),
    profilePicture: faker.image.urlPicsumPhotos(),
    comment: "Bet it looks even better at sunset!",
    replies: [
      {
        username: faker.internet.userName(),
        profilePicture: faker.image.urlPicsumPhotos(),
        comment: "LOL! Literally thought the same thing "
      },
      {
        username: faker.internet.userName(),
        profilePicture: faker.image.urlPicsumPhotos(),
        comment: "just nature. perfect🌿🌿🌿"
      }
    ]
  }
];

//add likes to array
const likes = [];

for (let i = 0; i <= Math.floor(Math.random() * 30); i++) {
  const oneLike = {
    username: faker.internet.userName(),
    longName: faker.person.fullName(),
    profilePicture: faker.image.urlPicsumPhotos()
  };

  likes.push(oneLike);
}

likeNumber.innerText = likes.length;
commentNumber.innerText = comments.length;
spotlight.innerText = likes[0].username;

//heart function

const fillHeart = function (heart) {
  heart.addEventListener("click", function () {
    if (heart.classList.contains("fa-regular")) {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid");
    } else {
      heart.classList.add("fa-regular");
      heart.classList.remove("fa-solid");
    }
  });
};

hearts.forEach(function (heart) {
  fillHeart(heart);
});

fillHeart(bookmark);

//Show comments

viewAllComments.addEventListener("click", function () {
  const commentBox = document.createElement("div");
  commentBox.classList.add("comments");

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

  const commentContainer = get(".comment-container");

  comments.forEach(function (comment) {
    const singleComment = document.createElement("div");
    singleComment.innerHTML = `
      <div class ="comment flex">
        <img
          class="profile-picture align-items-center"
          src="${comment.profilePicture}"
        />
        <div class="comment-information">
          <p class="user medium-bold-font">${comment.username}</p>
          <p class="comment-text very-thin-font">${comment.comment}</p>
          <p class="reply-button very-thin-font pointer">Replies</p>
        </div>
        <i class="icons fa-regular fa-heart pointer"></i>
      </div>
    `;

    commentContainer.appendChild(singleComment);

    const newHeart = singleComment.querySelector('.fa-heart');
    newHeart.addEventListener('click', fillHeart(newHeart));

    let isReplyOn = false;

    //show replies
    const replyButton = singleComment.querySelector(".reply-button");
    replyButton.addEventListener("click", function () {
      if (isReplyOn === false) {
        isReplyOn = true;

        comment.replies.forEach(function (reply) {
          const replyBox = document.createElement("div");
          replyBox.classList.add("reply-box");

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
          singleComment.appendChild(replyBox);

          const newReplyHeart = replyBox.querySelector('.fa-heart');
          newReplyHeart.addEventListener('click', fillHeart(newReplyHeart));
        });
      } else {
        isReplyOn = false;
        const getExistingReplies = singleComment.querySelectorAll(".reply-box");

        getExistingReplies.forEach(function (reply) {
          reply.remove();
        });
      }
    });

  });

  const closeComments = commentBox.querySelector(".close-comments");
  closeComments.addEventListener("click", function () {
    commentBox.remove();
  });
});

//show likes
const showLikes = function () {
  const likeList = document.createElement("div");
  likeList.classList.add("likes");

  likeList.innerHTML = `
    <div class="like-list flex column full-width full-height">
    
      <div class="likes-header flex align-items-center justify-content-center row full-width">
        <i class="icons close-likes pointer fa-solid fa-angle-left"></i>
        <p>Likes</p>
        <i class="icons fa-regular fa-paper-plane pointer"></i>
      </div>

      <div class="like-container full-height">
      </div>  
    </div>`;
  post.appendChild(likeList);

  const likeContainer = get(".like-container");

  likes.forEach(function (like) {
    const singleLike = document.createElement("div");
    singleLike.classList.add("like-box");

    singleLike.innerHTML = `
      <div class ="like flex">

        <div class="complete-like-information flex">
          <img
            class="profile-picture align-items-center"
            src="${like.profilePicture}"
          />
          <div class="like-information">
            <p class="user pointer medium-bold-font">${like.username}</p>
            <p class="long-name very-thin-font">${like.longName}</p>
          </div>
        </div>

        <button class="follow pointer">Follow</button>
      </div>
    `;
    likeContainer.appendChild(singleLike);

    const followButton = singleLike.querySelector(".follow");
    followButton.addEventListener("click", function () {
      console.log("clicked");
      if (followButton.innerText === "Follow") {
        followButton.innerText = "Following";
        followButton.classList.remove("follow");
        followButton.classList.add("following");
      } else {
        followButton.innerText = "Follow";
        followButton.classList.add("follow");
        followButton.classList.remove("following");
      }
    });
  });

  const closeLikes = likeList.querySelector(".close-likes");

  closeLikes.addEventListener("click", function () {
    likeList.remove();
  });
};

seeMore.addEventListener("click", showLikes);
showOthers.addEventListener("click", showLikes);
