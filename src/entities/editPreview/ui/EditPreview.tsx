import css from './editPreview.module.css';

export const EditPreview = () => {
  return (
    <div className={css.wrapper}>
      <p>
        Чтобы просмотреть или изменить данные пользователь, пожалуйста, выберите
        пользователя
      </p>
    </div>
  );
};
