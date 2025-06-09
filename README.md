# REMWaste 

## Key Features 

**Dynamic Data Fetching**
The available skip options are fetched from the API 
("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft") 
ensuring the list is always up-to-date.

**Modular Structure**
The application is divided into components: 
- "NavBar" - navigation menu with highlighted active page
- "CardSkip" - displays individual skip cards with selection option 
- "SelectSkip" - main page managing selection and navigation

**State Management**
- The selected skip is managed in "SelectSkip" and passed as props to "CardSkip", allowing centralized control.

**Navigation with React Router**
- React Router is used for smooth navigation between pages.

**Responsive Design**
- CSS styles are adapted for both mobile and desktop devices using flexbox and media queries.

**Clear and Modern UI/UX**
- Selected card is visually highlighted with a colored border and shadow.  
- Buttons have hover effects and are intuitive to use.

## Technical Details
- React 18+  
- React Router v6  
- Fetch API for data retrieval  
- CSS with flexbox and media queries  
- Functional components and React hooks ("useState", "useEffect", "useNavigate")