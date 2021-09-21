function downloadChapter(chapterindex, lectureindex) {
    var num_lectures = coursedata["chapters"][chapterindex]["lectures"].length;
    var chapter_name = sanitize(
     chapterindex + 1 + ". " + coursedata["chapters"][chapterindex]["name"]
    );
    mkdirp(
     download_directory + "/" + course_name + "/" + chapter_name,
     function() {
      downloadLecture(chapterindex, lectureindex, num_lectures, chapter_name);
     }
    );
   }