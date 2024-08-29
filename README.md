 remotes: This object is where we would define remote modules that our application depends on. For example, if our application needs to load components or utilities from another federated module, we would specify those here. 
 exposes: This object defines what parts of our application we want to make available to other federated modules.

 used ProductService in cart module to act as a Anti Corruption Layer -> this will convert the incoming dollar price to INR.
 also in MainLayout.jsx in container module implemented routing to the different micro frontend -> here these are ProductContent and PDPContent

"In this approach, we can dynamically load the Header component from a remotely deployed URL:

javascript

const App = () => {
  const [Header, setHeader] = useState(null);

  useEffect(() => {
    import('headerApp/Header')
      .then((module) => {
        setHeader(() => module.default);
      })
      .catch((error) => console.error('Error loading Header:', error));
  }, []);

  return (
    <div>
      <h2>Main Shell Application</h2>
      {Header ? <Header /> : <p>Loading Header...</p>}
    </div>
  );
};

