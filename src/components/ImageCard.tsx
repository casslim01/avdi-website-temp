interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
}

function ImageCard({ imageUrl, imageAlt, title, description, tags }: ImageCardProps) {
  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
        <img
          className="w-full"
          src={imageUrl}
          alt={imageAlt}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;