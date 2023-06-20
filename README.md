## Описание проекта

Этот проект - это приложение на React, предоставляющее систему управления автомобилями. Оно позволяет пользователям просматривать и взаимодействовать с информацией об автомобилях, такую как детали автомобилей, местоположение и варианты сортировки. Приложение использует различные компоненты и хуки для обработки получения данных, фильтрации и отображения.

## Иллюстрация к проекту

![Главная страница карточек с автомобилями](https://github.com/DanilVystupov/car-management-app/blob/main/home.png)
![Сортировка автомобилей](https://github.com/DanilVystupov/car-management-app/blob/main/sorted.png)
![Редактирование данных автомобиля](https://github.com/DanilVystupov/car-management-app/blob/main/edit.png)
![Местоположение автомобиля](https://github.com/DanilVystupov/car-management-app/blob/main/location.png)

## Развертывание

Приложение развернуто на Netlify для удобного доступа. Вы можете просмотреть приложение, перейдя по [ссылке](https://radiant-macaron-9bac6a.netlify.app).

## Структура проекта

- `src/api/CarService.ts`: Этот модуль обеспечивает функциональность получения данных об автомобилях из API.
- `src/components/CarItem.tsx`, `src/components/CarsList.tsx`, `src/components/CarsSorted.tsx`, `src/components/CarEditorItem`, `src/components/CarLocation.tsx`: Эти компоненты отвечают за отображение информации об автомобилях, списков, вариантов сортировки, редактирования и отображения местоположения автомобилей.
- `src/hooks/useCarsData.tsx`, `src/hooks/useCarsFilter.tsx`: Эти пользовательские хуки обрабатывают операции получения данных и фильтрации, связанные с автомобилями.
- `src/UI/button/MyButton`: Этот компонент представляет собой настраиваемую кнопку, используемую в пользовательском интерфейсе.
- `src/UI/select/MySelect`: Этот компонент представляет собой настраиваемый выпадающий список, используемый в пользовательском интерфейсе.
- `App.tsx`: В этом файле содержится основной компонент, который служит точкой входа в приложение.
- `index.ts`: Этот файл отвечает за рендеринг корневого компонента в DOM.
- `types.ts`: Этот файл содержит определения типов, используемых во всем проектеЗависимости

## Для запуска этого приложения вам понадобятся следующие зависимости:

- @testing-library/jest-dom: ^5.16.5
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- axios: ^1.4.0
- leaflet: ^1.9.3
- react: ^18.2.0
- react-dom: ^18.2.0
- react-leaflet: ^4.2.1
- react-router-config: ^5.1.1
- react-router-dom: ^6.11.2
- react-scripts: 5.0.1
- web-vitals: ^2.1.4
