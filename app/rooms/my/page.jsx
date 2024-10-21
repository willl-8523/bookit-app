import getMyRooms from '@/app/actions/getMyRooms';
import Heading from '@/components/Heading';
import MyRoomCard from '@/components/MyRoomCard';

const MyRoomsPage = async () => {
  const rooms = await getMyRooms();

  return (
    <>
      <Heading title={'My Room Listings'} />
      {rooms.length ? (
        rooms.map((room) => <MyRoomCard key={room.$id} room={room} />)
      ) : (
        <p>You have ne romm listing</p>
      )}
    </>
  );
};

export default MyRoomsPage;
