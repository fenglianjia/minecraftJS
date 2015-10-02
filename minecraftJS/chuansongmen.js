/**
 * Created by Administrator on 2015/10/2.
 */
function procCmd(cmd){
    var data = cmd.split(" ");
    if(data[0] == "tp"){
        clientMessage(data[0]);
        var playerx = data[1];
        var playery = data[2];
        var playerz = data[3];
        setPosition(getPlayerEnt(),playerx,playery,playerz);
    }
    if(data[0] == "show"){
        clientMessage("X:");
        clientMessage(getPlayerX());
        clientMessage("Y:");
        clientMessage(getPlayerY());
        clientMessage("Z:");
        clientMessage(getPlayerZ());
    }
}
