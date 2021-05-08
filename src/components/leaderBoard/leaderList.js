class leaderList extends Component {
    render() {
        return (
            <li class="m-leader_card">
                <UserPic />
                <div class="m-content">
                    <p class="m-content__name">Sarah Edo</p>
                    <UserPic />
                    <scoreDetail />
                </div>
                <answeredScore />
            </li>
        )
    }
}

export default leaderList