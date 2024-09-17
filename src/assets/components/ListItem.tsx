import { useState } from "react";

interface ListItemProps {
  id: string;
  task: string;
  handleEdit: (id: string, task: string) => void;
  handleDelete: (id: string) => void;
}

interface Todo {
  id: string;
  task: string;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  task,
  handleEdit,
  handleDelete,
}) => {
  const [currentItem, setCurrentItem] = useState<Todo>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  //

  const handleSelectItemToUpdate = () => {
    setIsEdit((prev) => !prev);
    if(!isEdit) {
      setCurrentItem()
    }
  };

  return (
    <li className="item-todo">
      <input type="checkbox" name="" />
      <p className="text">{task}</p>
      {/* <input type="text" name="" value={currentItem?.task} onChange={(e) => setCurrentItem((prev) => {..., })} /> */}
      <button type="button" onClick={handleSelectItemToUpdate}>
        {isEdit ? "Lưu" : "Sửa"}
      </button>
      <button type="button" className="delete" onClick={() => handleDelete(id)}>
        Xóa
      </button>
    </li>
  );
};
export default ListItem;
