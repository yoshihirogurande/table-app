import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  IconButton,
} from '@chakra-ui/react';

import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

function EditableTable() {
  const [data, setData] = useState([
    { id: 1, lastName: '山田', firstName: '太郎', memo: 'メモ内容1' },
    { id: 2, lastName: '佐藤', firstName: '次郎', memo: 'メモ内容2' },
  ]);
  const [newLastName, setNewLastName] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newMemo, setNewMemo] = useState('');

  const handleAddRow = () => {
    const newId = data.length > 0 ? Math.max(...data.map(d => d.id)) + 1 : 1;
    const newRow = {
      id: newId,
      lastName: newLastName,
      firstName: newFirstName,
      memo: newMemo,
    };
    setData([newRow, ...data]);
    setNewLastName('');
    setNewFirstName('');
    setNewMemo('');
  };

  const handleInputChange = (e, id, fieldName) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, [fieldName]: e.target.value };
      }
      return item;
    });
    setData(newData);
  };

  const handleRemoveRow = id => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>姓</Th>
            <Th>名</Th>
            <Th>メモ</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Input
                placeholder="姓"
                value={newLastName}
                onChange={e => setNewLastName(e.target.value)}
              />
            </Td>
            <Td>
              <Input
                placeholder="名"
                value={newFirstName}
                onChange={e => setNewFirstName(e.target.value)}
              />
            </Td>
            <Td>
              <Input
                placeholder="メモ"
                value={newMemo}
                onChange={e => setNewMemo(e.target.value)}
              />
            </Td>
            <Td>
              <IconButton
                aria-label="追加"
                icon={<AddIcon />}
                onClick={handleAddRow}
              />
            </Td>
          </Tr>
          {data.map(row => (
            <Tr key={row.id}>
              <Td>
                <Input
                  value={row.lastName}
                  onChange={e => handleInputChange(e, row.id, 'lastName')}
                />
              </Td>
              <Td>
                <Input
                  value={row.firstName}
                  onChange={e => handleInputChange(e, row.id, 'firstName')}
                />
              </Td>
              <Td>
                <Input
                  value={row.memo}
                  onChange={e => handleInputChange(e, row.id, 'memo')}
                />
              </Td>
              <Td>
                <IconButton
                  aria-label="行を削除"
                  icon={<DeleteIcon />}
                  onClick={() => handleRemoveRow(row.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default EditableTable;
