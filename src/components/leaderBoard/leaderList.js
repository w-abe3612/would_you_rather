class leaderList extends Component {
    render() {
        return (
            <li class="m-leader_card">
                <userPic />
                <div class="m-content">
                    <p class="m-content__name">Sarah Edo</p>
                    <userPic />
                    <scoreDetail />
                </div>
                <answeredScore />
            </li>
        )
    }
}

export default leaderList