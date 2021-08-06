import styled from "styled-components";

export const CardContent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #eee),
    color-stop(20%, #eee),
    color-stop(20%, #ccc),
    color-stop(40%, #ccc),
    color-stop(40%, #eee),
    color-stop(60%, #eee),
    color-stop(60%, #ccc),
    color-stop(80%, #ccc),
    color-stop(80%, #eee),
    color-stop(100%, #eee)
  );
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  transform: translateZ(0);
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transition: all 0.25 ease-out;

  :hover {
    transform: scale(1.05);
  }

  h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;
