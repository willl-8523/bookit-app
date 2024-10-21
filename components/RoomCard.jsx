import Image from 'next/image';
import Link from 'next/link';

/* 
  URL = 
    https://cloud.appwrite.io/v1/storage/buckets/rooms/files/671648040008279609bb/view?project=bookit-2589&project=bookit-2589&mode=admin
  const imageUrl = 
    `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}&project=bookit-2589&mode=admin`;
*/

const RoomCard = ({ room }) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

  const imageSrc = room.image ? imageUrl : '/images/no-image.jpg';

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row sm:gap-3 justify-between items-start sm:items-center">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <Image
          src={imageSrc}
          width={400}
          height={100}
          alt={room.name}
          className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
        />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">{room.name}</h4>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Address:</span>{' '}
            {room.address}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Availability:</span>{' '}
            {room.availability}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Price:</span> $
            {room.price_per_hour}/hour
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row sm:w-28 sm:space-x-2 mt-2 sm:mt-0 lg:w-auto">
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-blue-500 text-white sm:text-sm px-4 py-2 rounded mb-2 sm:mb-0 w-full lg:text-base  sm:w-28 lg:w-auto text-center hover:bg-blue-700"
        >
          View Room
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
