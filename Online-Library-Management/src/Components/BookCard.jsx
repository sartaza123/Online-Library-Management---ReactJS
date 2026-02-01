function BookCard({ data }) {
  //   console.log(data[1]);
  return (
    <>
      <div className="w-50 rounded-md m-10 shadow-2xl">
        <div className="image object-cover">
          <img
            src={data.coverImage}
            alt="Image not available"
            className="w-full h-56 rounded-sm"
          />
        </div>
        <div className="p-2">
          <h3 className="font-bold">{data.title}</h3>
          <p className="text-sm">Category : {data.category}</p>
          <p className="text-sm">Launch Date : {data.launchDate}</p>
          <p className="text-sm">Pages : {data.pages}</p>
        </div>
      </div>
    </>
  );
}
export default BookCard;
