'use strict';
const e = React.createElement;

class Project extends React.Component {
    constructor(props){
        super(props);
        this.id = props.id;
        this.description = props.description;
        this.image = props.image;
        this.video = props.video;
        this.github = props.github;
        this.demo = props.demo;
    }

    render() {
        return (
            <>
                <div className="project-thumb" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                    <img src={this.image} />
                </div>
            </>
        )
    }
}

export default Project;