export default function () {
    return useState('login', () => ({
        logged_in: false,
        user_id: "",
        user_initials: ""
    }));
}