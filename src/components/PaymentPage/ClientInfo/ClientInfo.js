import { useState } from 'react';
import ClientsInfo from './ClientsInfo/ClientsInfo';
import EditButton from './EditButton/EditButton';

const ClientInfo = () => {
  const guests = localStorage.getItem('Guests');
  const numGuests = parseInt(guests, 10);

  const [guestData, setGuestData] = useState(Array.from({ length: numGuests }, () => ({
    name: '',
    surname: '',
    email: '',
    phone: '',
  })));

  const [selectedGuestIndex, setSelectedGuestIndex] = useState(null);

  const handleEditClick = (index) => {
    setSelectedGuestIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSaveData = (index, data) => {
    setGuestData((prevData) => {
      const newData = [...prevData];
      newData[index] = data;
      return newData;
    });
    setSelectedGuestIndex(null);
  };

  return (
    <>
      {guestData.map((guest, index) => (
        <div key={index}>
          <EditButton
            onClick={() => handleEditClick(index)}
            name={`Guest ${index + 1}`}
          />
          {selectedGuestIndex === index && (
            <ClientsInfo
              selectedGuestIndex={selectedGuestIndex}
              guests={numGuests}
              data={guest}
              onSaveData={(data) => handleSaveData(index, data)}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ClientInfo;
