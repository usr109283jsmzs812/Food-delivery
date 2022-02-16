import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import RectangleButton, { BigRectangleButton, BigRectBut, RectBut } from "../../buttons/rectangle-button";
import HomePageHeader from "./header";
import HomePageSlider from "./slider-home";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { InsideRectBut } from "../../buttons/rectangle-button";
import FavoriteCategories from "./favorite-categories";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { getFavoriteRecipes, searchingOnDb } from "../../../api/favorite-recipes";
import { auth } from "../../../firebase";

const HomePageContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  /* overflow-y: hidden; */
  height: 100vh;
  width: 100%;
`;

const BigRectButtonDiv = styled.div`
  padding-top: 40px;
`;

const FavoritesCardHeader = styled.h3`
  font-family: "Balsamiq Sans";
  font-weight: 400;
  font-size: 22px;
  margin-top: 24px;
`;

const HomePage = observer(() => {
  const { userStore } = useContext(Context);
  const { categoriesStore } = useContext(Context);
  const { persist } = useContext(Context);
  const { uid } = auth.currentUser;

  useEffect(() => {
    getFavoriteRecipes(uid).then((res) => {
      const favoriteRecipeIds = Object.entries(res).reduce((array, item: any) => {
        const recipe = {
          id: item[0],
          recipeId: item[1].recipeId,
          categories: item[1].category,
        };
        array.push(recipe);
        return array;
      }, []);
      console.log(favoriteRecipeIds, "favRecIDS");
      searchingOnDb(favoriteRecipeIds)
        .then((res) => {
          let elmg;
          console.log(res, "res");
          userStore.setDbResponse(res);

          console.log(userStore.dbResponse);
          // return res;
        });
    });
  }, []);

  return (
    <HomePageContent>
      <HomePageHeader desc="Находите, ешьте, отслеживайте полезную пищу" name="Эвелина" />
      <HomePageSlider />
      <BigRectButtonDiv>
        <BigRectangleButton title="Следите за своим прогрессом">
          <InsideRectBut key="1">
            Смотреть
            <ArrowRightIcon />
          </InsideRectBut>
        </BigRectangleButton>
      </BigRectButtonDiv>
      <FavoritesCardHeader>Выберите интересующую категорию</FavoritesCardHeader>
      <FavoriteCategories />
    </HomePageContent>
  );
});

export default HomePage;
