import React, { Component } from "react";

class Sql extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("sql");
          }}
        >
          <svg
            className="sqlLogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 55 55"
          >
            <path d="M52.354 8.51C51.196 4.22 42.577 0 27.5 0S3.803 4.22 2.646 8.51A.98.98 0 0 0 2.5 9v37a.94.94 0 0 0 .117.451C3.798 51.346 14.364 55 27.5 55c13.106 0 23.655-3.639 24.875-8.516A.988.988 0 0 0 52.5 46V9a.98.98 0 0 0-.146-.49zm-1.933 25.475a2.46 2.46 0 0 1-.259.66 3.39 3.39 0 0 1-.45.646 5.42 5.42 0 0 1-.363.392c-.081.079-.17.157-.26.236a8.234 8.234 0 0 1-.526.426c-.082.061-.17.12-.257.18-.226.156-.462.311-.721.463-.068.041-.141.08-.212.12a16.52 16.52 0 0 1-.945.497c-.043.021-.088.041-.132.061-.375.177-.767.351-1.186.519l-.036.014c-2.271.907-5.176 1.67-8.561 2.17l-.051.007a55.03 55.03 0 0 1-2.026.259c-.113.012-.232.02-.346.032-.605.063-1.217.121-1.847.167-.288.021-.59.031-.883.049-.474.028-.943.059-1.429.076a69.019 69.019 0 0 1-4.863-.003c-.486-.017-.955-.049-1.429-.076-.293-.017-.595-.028-.883-.049a59.764 59.764 0 0 1-1.847-.167c-.114-.012-.233-.02-.346-.032a57.277 57.277 0 0 1-2.026-.259l-.051-.007c-3.385-.5-6.29-1.263-8.561-2.17a21.248 21.248 0 0 1-1.222-.533c-.043-.021-.089-.041-.132-.061a15.908 15.908 0 0 1-.945-.497c-.07-.04-.144-.079-.212-.12a11.544 11.544 0 0 1-.721-.463c-.086-.06-.175-.119-.257-.18a8.234 8.234 0 0 1-.526-.426c-.089-.078-.179-.156-.26-.236a5.22 5.22 0 0 1-.363-.392 3.729 3.729 0 0 1-.45-.646 2.423 2.423 0 0 1-.259-.66c-.037-.159-.078-.321-.078-.482 0-.113.013-.226.031-.338a.997.997 0 0 0-.031-.445v-7.424c.028.026.063.051.092.077.218.192.44.383.69.567C9.049 28.786 16.582 31 27.5 31c10.872 0 18.386-2.196 22.169-5.028.302-.22.574-.447.83-.678l.001-.001v7.424a.997.997 0 0 0-.031.445c.019.112.031.225.031.338 0 .161-.041.323-.079.485zm.079-20.692v7.424a.997.997 0 0 0-.031.445c.019.112.031.225.031.338 0 .161-.041.323-.079.485a2.46 2.46 0 0 1-.259.66 3.39 3.39 0 0 1-.45.646 5.42 5.42 0 0 1-.363.392c-.081.079-.17.157-.26.236a8.234 8.234 0 0 1-.526.426c-.082.061-.17.12-.257.18-.226.156-.462.311-.721.463-.068.041-.141.08-.212.12a16.52 16.52 0 0 1-.945.497c-.043.021-.088.041-.132.061-.375.177-.767.351-1.186.519l-.036.014c-2.271.907-5.176 1.67-8.561 2.17l-.051.007a55.03 55.03 0 0 1-2.026.259c-.113.012-.232.02-.346.032-.605.063-1.217.121-1.847.167-.288.021-.59.031-.883.049-.474.028-.943.059-1.429.076a69.019 69.019 0 0 1-4.863-.003c-.486-.017-.955-.049-1.429-.076-.293-.017-.595-.028-.883-.049a59.764 59.764 0 0 1-1.847-.167c-.114-.012-.233-.02-.346-.032a57.277 57.277 0 0 1-2.026-.259l-.051-.007c-3.385-.5-6.29-1.263-8.561-2.17a21.248 21.248 0 0 1-1.222-.533c-.043-.021-.089-.041-.132-.061a15.908 15.908 0 0 1-.945-.497c-.07-.04-.144-.079-.212-.12a11.544 11.544 0 0 1-.721-.463c-.086-.06-.175-.119-.257-.18a8.234 8.234 0 0 1-.526-.426c-.089-.078-.179-.156-.26-.236a5.22 5.22 0 0 1-.363-.392 3.729 3.729 0 0 1-.45-.646 2.423 2.423 0 0 1-.259-.66c-.037-.159-.078-.321-.078-.482 0-.113.013-.226.031-.338a.997.997 0 0 0-.031-.445v-7.424c.12.109.257.216.387.324.072.06.139.12.215.18.3.236.624.469.975.696.073.047.155.093.231.14a17.11 17.11 0 0 0 1.299.731c.365.186.748.367 1.151.542.066.029.126.059.193.087.469.199.967.389 1.485.573.143.051.293.099.44.149.412.139.838.272 1.279.401.159.046.315.094.478.138.585.162 1.189.316 1.823.458.087.02.181.036.269.055a45.634 45.634 0 0 0 2.348.445c.567.093 1.151.178 1.75.256.154.02.301.043.457.062.744.09 1.514.167 2.305.233.195.016.398.028.596.042.633.046 1.28.084 1.942.114.241.011.481.022.727.031.862.029 1.74.05 2.65.05s1.788-.021 2.65-.05c.245-.009.485-.02.727-.031.662-.03 1.309-.068 1.942-.114.198-.015.4-.026.596-.042a60.436 60.436 0 0 0 2.305-.233c.156-.019.303-.042.457-.062a53.94 53.94 0 0 0 2.363-.36 45.634 45.634 0 0 0 1.735-.341c.088-.019.182-.036.269-.055a38.777 38.777 0 0 0 1.823-.458c.163-.045.319-.092.478-.138a32.87 32.87 0 0 0 1.279-.401c.147-.05.297-.098.44-.149a26.392 26.392 0 0 0 1.485-.573c.067-.028.127-.058.193-.087a21.377 21.377 0 0 0 1.518-.735c.327-.175.638-.354.932-.538.076-.047.158-.093.231-.14.351-.227.675-.459.975-.696.075-.06.142-.12.215-.18.13-.108.267-.215.387-.324zM27.5 2c13.555 0 23 3.952 23 7.5s-9.445 7.5-23 7.5-23-3.952-23-7.5S13.945 2 27.5 2zm23 43.703a1.02 1.02 0 0 0-.032.135C49.901 49.297 40.536 53 27.5 53S5.099 49.297 4.532 45.838a1.09 1.09 0 0 0-.032-.131v-8.414c.028.026.063.051.092.077.218.192.44.383.69.567C9.049 40.786 16.582 43 27.5 43c10.872 0 18.386-2.196 22.169-5.028.302-.22.574-.447.83-.678l.001-.001v8.41z" />
          </svg>
          <br />
          SQL
        </p>
      </div>
    );
  }
}

export default Sql;
