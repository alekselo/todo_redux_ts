import style from './ModalDelete.module.scss';

export const ModalDelete = () => {
  return (
    <div className={style.ModalDelete}>
      <div className={style.ModalDeleteModal}>

        <div className={style.ModalDeleteModalButtons}>
          <button>Delete</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  )
}