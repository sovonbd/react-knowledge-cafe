import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
      <div>
        <h3 className="text-4xl">Reading Time: {readingTime} mins</h3>
      </div>
      <h2 className="text-3xl text-center ">Bookmark Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark bookmark={bookmark} key={idx}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
