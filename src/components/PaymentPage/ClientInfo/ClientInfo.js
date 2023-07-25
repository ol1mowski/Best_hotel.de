import { useState, useEffect } from 'react';
import ClientsInfo from './ClientsInfo/ClientsInfo';
import EditButton from './EditButton/EditButton';
import AddButton from './AddButton/AddButton';

const ClientInfo = () => {
  const guests = localStorage.getItem('Guests');
  const numGuests = parseInt(guests, 10);

  const [selectedGuestIndex, setSelectedGuestIndex] = useState(null);

  const handleEditClick = (index) => {
    setSelectedGuestIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {Array.from({ length: numGuests }).map((_, index) => (
        <div key={index}>
          <EditButton
            onClick={() => handleEditClick(index)}
            name={`Guest ${index + 1}`}
          />
          {selectedGuestIndex === index && (
            <ClientsInfo
              selectedGuestIndex={selectedGuestIndex}
              guests={numGuests}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ClientInfo;
