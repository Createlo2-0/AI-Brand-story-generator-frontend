function Testimonial({ img, name, role, text, tags }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <img
        src={img}
        alt={name}
        className="w-30 h-30 rounded-full object-cover mb-4 border-2 border-white shadow-lg"
      />
      <p className="text-white font-semibold mb-1">{name}</p>
      <p className="text-gray-300 text-sm mb-2">{text}</p>
      <div className="flex gap-2 text-xs text-teal-400 font-bold">
        {tags.map((tag, i) => (
          <span key={tag}>
            {tag}
            {i < tags.length - 1 && (
              <span className="text-white font-normal mx-1">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Testimonial;