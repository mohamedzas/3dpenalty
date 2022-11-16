var TEAM_LABEL = new Array();
TEAM_LABEL[0] = 0; //"russia";
TEAM_LABEL[1] = 1; //"japan";
TEAM_LABEL[2] = 2; //"iran";
TEAM_LABEL[3] = 3; //"brazil";
TEAM_LABEL[4] = 4; //"mexico";
TEAM_LABEL[5] = 5; //"belgium";
TEAM_LABEL[6] = 6; //"south_korea";
TEAM_LABEL[7] = 7; //"saudi_arabia";
TEAM_LABEL[8] = 8; //"germany";
TEAM_LABEL[9] = 9; //"england";
TEAM_LABEL[10] = 10; //"spain";
TEAM_LABEL[11] = 11; //"nigeria";
TEAM_LABEL[12] = 12; //"costa_rica";
TEAM_LABEL[13] = 13; //"poland";
TEAM_LABEL[14] = 14; //"egypt";
TEAM_LABEL[15] = 15; //"serbia";
TEAM_LABEL[16] = 16; //"iceland";
TEAM_LABEL[17] = 17; //"france";
TEAM_LABEL[18] = 18; //"portugal";
TEAM_LABEL[19] = 19; //"uruguay";
TEAM_LABEL[20] = 20; //"argentina";
TEAM_LABEL[21] = 21; //"colombia";
TEAM_LABEL[22] = 22; //"panama";
TEAM_LABEL[23] = 23; //"senegal";
TEAM_LABEL[24] = 24; //"morocco";
TEAM_LABEL[25] = 25; //"tunisia";
TEAM_LABEL[26] = 26; //"switzerland";
TEAM_LABEL[27] = 27; //"croatia";
TEAM_LABEL[28] = 28; //"sweden";
TEAM_LABEL[29] = 29; //"denmark";
TEAM_LABEL[30] = 30; //"australia";
TEAM_LABEL[31] = 31; //"peru";


var TEAM_INFO = new Array();
TEAM_INFO[0] = {
    goalkeeper: 0,
    player: 0,
    opponent: 0
};
TEAM_INFO[1] = {
    goalkeeper: 0,
    player: 1,
    opponent: 1
};
TEAM_INFO[2] = {
    goalkeeper: 0,
    player: 2,
    opponent: 2
};
TEAM_INFO[3] = {
    goalkeeper: 0,
    player: 3,
    opponent: 3
};
TEAM_INFO[4] = {
    goalkeeper: 0,
    player: 4,
    opponent: 4
};
TEAM_INFO[5] = {
    goalkeeper: 0,
    player: 5,
    opponent: 5
};
TEAM_INFO[6] = {
    goalkeeper: 0,
    player: 4,
    opponent: 6
};
TEAM_INFO[7] = {
    goalkeeper: 0,
    player: 6,
    opponent: 7
};
TEAM_INFO[8] = {
    goalkeeper: 0,
    player: 7,
    opponent: 8
};
TEAM_INFO[9] = {
    goalkeeper: 0,
    player: 8,
    opponent: 9
};
TEAM_INFO[10] = {
    goalkeeper: 0,
    player: 9,
    opponent: 10
};
TEAM_INFO[11] = {
    goalkeeper: 1,
    player: 10,
    opponent: 11
};
TEAM_INFO[12] = {
    goalkeeper: 1,
    player: 3,
    opponent: 12
};
TEAM_INFO[13] = {
    goalkeeper: 0,
    player: 11,
    opponent: 13
};
TEAM_INFO[14] = {
    goalkeeper: 0,
    player: 12,
    opponent: 14
};
TEAM_INFO[15] = {
    goalkeeper: 0,
    player: 13,
    opponent: 15
};
TEAM_INFO[16] = {
    goalkeeper: 0,
    player: 1,
    opponent: 16
};
TEAM_INFO[17] = {
    goalkeeper: 0,
    player: 14,
    opponent: 17
};
TEAM_INFO[18] = {
    goalkeeper: 0,
    player: 15,
    opponent: 18
};
TEAM_INFO[19] = {
    goalkeeper: 0,
    player: 7,
    opponent: 19
};
TEAM_INFO[20] = {
    goalkeeper: 0,
    player: 7,
    opponent: 20
};
TEAM_INFO[21] = {
    goalkeeper: 1,
    player: 9,
    opponent: 21
};
TEAM_INFO[22] = {
    goalkeeper: 1,
    player: 17,
    opponent: 22
};
TEAM_INFO[23] = {
    goalkeeper: 1,
    player: 16,
    opponent: 23
};
TEAM_INFO[24] = {
    goalkeeper: 0,
    player: 18,
    opponent: 24
};
TEAM_INFO[25] = {
    goalkeeper: 0,
    player: 19,
    opponent: 25
};
TEAM_INFO[26] = {
    goalkeeper: 0,
    player: 4,
    opponent: 26
};
TEAM_INFO[27] = {
    goalkeeper: 0,
    player: 14,
    opponent: 27
};
TEAM_INFO[28] = {
    goalkeeper: 0,
    player: 21,
    opponent: 28
};
TEAM_INFO[29] = {
    goalkeeper: 0,
    player: 4,
    opponent: 29
};
TEAM_INFO[30] = {
    goalkeeper: 0,
    player: 20,
    opponent: 30
};
TEAM_INFO[31] = {
    goalkeeper: 0,
    player: 19,
    opponent: 31
};


var NUM_TEAMS = TEAM_INFO.length;


var EASY_TEAM = [2, 6, 7, 12, 14, 16, 22, 23, 24, 25, 31];
var MEDIUM_TEAM = [0, 1, 4, 5, 11, 13, 15, 19, 21, 26, 27, 28, 29, 30];
var HARD_TEAM = [3, 8, 9, 10, 17, 18, 20];