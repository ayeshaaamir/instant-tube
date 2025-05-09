const commentsData = [
  {
    name: "John Doe",
    text: "This is a comment",
    replies: [
      {
        name: "John Doe",
        text: "This is a comment",
        replies: [],
      },
      {
        name: "John Doe",
        text: "This is a comment",
        replies: [
          {
            name: "John Doe",
            text: "This is a comment",
            replies: [],
          },
          {
            name: "John Doe",
            text: "This is a comment",
            replies: [],
          },
          {
            name: "John Doe",
            text: "This is a comment",
            replies: [],
          },
        ],
      },
      {
        name: "John Doe",
        text: "This is a comment",
        replies: [],
      },
    ],
  },
  {
    name: "John Doe",
    text: "This is a comment",
    replies: [
      {
        name: "John Doe",
        text: "This is a comment",
        replies: [
          {
            name: "John Doe",
            text: "This is a comment",
            replies: [],
          },
          {
            name: "John Doe",
            text: "This is a comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "John Doe",
    text: "This is a comment",
    replies: [],
  },
  {
    name: "John Doe",
    text: "This is a comment",
    replies: [
      {
        name: "John Doe",
        text: "This is a comment",
        replies: [
          {
            name: "John Doe",
            text: "This is a comment",
            replies: [
              {
                name: "John Doe",
                text: "This is a comment",
                replies: [
                  {
                    name: "John Doe",
                    text: "This is a comment",
                    replies: [
                      {
                        name: "John Doe",
                        text: "This is a comment",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "John Doe",
    text: "This is a comment",
    replies: [],
  },
];

import PropTypes from "prop-types";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-start my-2 p-2 bg-gray-200 rounded-lg">
      <img
        className="w-10 h-10 rounded-full"
        src="data:image/png;base64,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"
        alt=""
      />
      <div className="flex flex-col ml-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="ml-5 border-l-2 border-gray-300 pl-5">
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className="ml-5">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <div className="flex flex-col">
        <div className="px-5">
          <h1 className="text-2xl font-bold">Comments</h1>
          <CommentList comments={commentsData} />
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    replies: PropTypes.array.isRequired,
  }).isRequired,
};

export default CommentsContainer;
