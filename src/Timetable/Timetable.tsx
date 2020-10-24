import React from "react";
import TimetableService from "../services/timrtableService";
import StudentAuthService from "../services/studentAuthService";
import { LessonWithSubject } from "../models/LessonWithSubject";

class Timetable extends React.Component {
  constructor(props: any) {
    super(props);
  }
  state = {
    loading: true,
    timetable: null,
  };
  async loadData() {
    const studentId = new StudentAuthService().getStudentID();
    let timetable: LessonWithSubject[] | null = null;
    if (studentId === null) {
      console.error("User not logined");
    }
    try {
      timetable = await TimetableService.getTimeTable(studentId);
    } catch (e) {
      console.error(e);
    }
    return timetable;
  }
  componentDidMount() {
    this.loadData().then((data) =>
      this.setState({
        loading: false,
        timetable: data,
      })
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    if (!this.state.loading) {
      return (
        <div>
          {(this.state.timetable! as LessonWithSubject[]).map((lesson) => (
            <div>{JSON.stringify(lesson)}</div>
          ))}
        </div>
      );
    }
  }
}
export default Timetable;
