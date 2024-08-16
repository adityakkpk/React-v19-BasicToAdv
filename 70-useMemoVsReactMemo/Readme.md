# useMemo vs React.memo

React.memo function rerenders the component (which is wrapped inside it) when the prop inside the component changes. This thing may lead to more rerenders when we pass a object in the component from its parent component. To handle this problem we use useMemo hook.