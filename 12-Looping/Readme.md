# Looping in JSX
- We Dont have for loops in JSX, so we have to use `map` method of arrays.
- For example:
    ```javascript
    <ul>
        {students.map((student) => (
            <li key={student.id}>{student.name}</li>
        ))}
    </ul>
    ```

- React will give `warnning` when you don't passs key prop to <li>.
- React uses the keys to differentiate each elements. So that it can remove or edit the element when somethif gets added or removed. 

* `Implement this feature in our project with some data written in a json file`.