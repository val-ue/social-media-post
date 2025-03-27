const get = function (selector) {
  return document.querySelector(selector);
};

const viewAllComments = get(".comment-link");
const heart = document.querySelectorAll(".fa-heart");
const post = get(".post");
const showOthers = get(".others");
const seeMore = get(".see-more");
const likeNumber = get(".like-number");
const commentNumber = get(".comment-number");
const spotlight = get(".spotlight");

const comments = [
  {
    username: "e.mendrala",
    profilePicture:
      "https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment: "reminds me of road trips through the countryside",
    replies: [
      {
        username: "nostalgic_nina",
        profilePicture:
          "https://images.unsplash.com/photo-1686771434157-7d488edc8415?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "OMG yes! You just unlocked a core memory for me 😆😆",
      },
      {
        username: "cloudwatcher89",
        profilePicture:
          "https://images.unsplash.com/photo-1718306502553-0108d0bc36c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "Agreed!",
      },
    ],
  },
  {
    username: "nature_lover23",
    profilePicture:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment: "such a perfect place..",
    replies: [
      {
        username: "sereneminds2",
        profilePicture:
          "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "Imagine just lying here and listening to the wind… 😌",
      },
      {
        username: "55sunnydays55",
        profilePicture:
          "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "Golden hour here must be unreal!",
      },
    ],
  },
  {
    username: "sunset_sophie",
    profilePicture:
      "https://images.unsplash.com/photo-1507281736509-c6289f1ea0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment: "Bet it looks even better at sunset!",
    replies: [
      {
        username: "techytim",
        profilePicture:
          "https://images.unsplash.com/photo-1554630981-a73ffb5ed6f8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "LOL! Literally thought the same thing ",
      },
      {
        username: "simplicitySeek",
        profilePicture:
          "https://images.unsplash.com/photo-1464295440335-ee082a75ccca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment: "just nature. perfect🌿🌿🌿",
      },
    ],
  },
];

const likes = [
  {
    username: "mitchc",
    longName: "Mitch Carter",
    profilePicture:
      "https://images.unsplash.com/photo-1742268350465-35d7baae61fa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "callieee",
    longName: "Callie ✨",
    profilePicture:
      "https://images.unsplash.com/photo-1741850820739-109eb983c478?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "jaydenw",
    longName: "Jayden Woods",
    profilePicture:
      "https://images.unsplash.com/photo-1741812191037-96bb5f12010a?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "lilam",
    longName: "Lila Marie",
    profilePicture:
      "https://images.unsplash.com/photo-1741891863771-7e5c33f82818?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "eli.txt",
    longName: "Eli Thompson",
    profilePicture:
      "https://images.unsplash.com/photo-1742156345582-b857d994c84e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "nature_lover23",
    longName: "Cassidy James",
    profilePicture:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "bennybikes",
    longName: "Benny Roberts",
    profilePicture:
      "https://images.unsplash.com/photo-1742414348804-3b1a648855d1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "mars.jpg",
    longName: "Marissa Lane",
    profilePicture:
      "https://images.unsplash.com/photo-1742107082666-dc8b5282b996?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "dani_dani",
    longName: "Dani Lopez",
    profilePicture:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1199&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "alexnotalex",
    longName: "Alex Greene",
    profilePicture:
      "https://images.unsplash.com/photo-1738236013982-9449791344de?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "wesleyt",
    longName: "Wesley Taylor",
    profilePicture:
      "https://images.unsplash.com/photo-1683512611593-59aa784f5f16?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "tash.a",
    longName: "Natasha Evans",
    profilePicture:
      "https://images.unsplash.com/photo-1736156725121-027231636f9d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "zekesworld",
    longName: "Zeke Harris",
    profilePicture:
      "https://images.unsplash.com/photo-1734966901441-ac6c1fff1fd2?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "finnwave",
    longName: "Finn Carter",
    profilePicture:
      "https://images.unsplash.com/photo-1738070593303-fbb151013701?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

likeNumber.innerText = likes.length;
commentNumber.innerText = comments.length;
spotlight.innerText = likes[1].username;

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
          <p class="reply-button very-thin-font pointer">Reply</p>
        </div>
        <i class="icons fa-regular fa-heart pointer"></i>
      </div>
    `;

    commentContainer.appendChild(singleComment);

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
