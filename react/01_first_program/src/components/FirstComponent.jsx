import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            <h1>My first component!</h1>
            <p className="paragraph"> My paragraph in the component</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;