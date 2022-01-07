import React from "react";
import FavoriteRecipeCard from "../../recipe-cards/favorite-recipe-card";
import FavorRecCardLike from "../../images/fav-re-cd-like";
import FavorRecCardSalad from "../../images/fav-re-cd-salad";

import styled from "styled-components";
import FavorRecCardChicken from "../../images/fav-re-cd-chicken";
import RectangleButton from "../../buttons/rectangle-button";

const RecipeFavoriteCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RectangleButtonSpan = styled.span`
  display: flex;
  align-items: flex-end;
`;

const RecipeFavoriteCard = () => {
    return (
        <RecipeFavoriteCardDiv>
            <FavoriteRecipeCard
                title="Chopped Spring Ramen"
                calories="250 kcal"
                likeIcon={<FavorRecCardLike />}
                icon={<FavorRecCardSalad />}
                category="Scallions & tomatoes"
            />
            <FavoriteRecipeCard
                title="Chicken Tandoori"
                calories="450 kcal"
                likeIcon={<FavorRecCardLike />}
                icon={<FavorRecCardChicken />}
                category="Chicken & salad"
            />
            <FavoriteRecipeCard
                title="Chicken Tandoori"
                calories="450 kcal"
                likeIcon={<FavorRecCardLike />}
                icon={<FavorRecCardChicken />}
                category="Chicken & salad"
            />

        </RecipeFavoriteCardDiv>
    );
};

export default RecipeFavoriteCard;
