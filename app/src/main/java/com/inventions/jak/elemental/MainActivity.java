package com.inventions.jak.elemental;

import android.content.Intent;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;


public class MainActivity extends AppCompatActivity {

    private int playerOneHealth;

    private int playerTwoHealth;

    private TextView PlayerOneHealthOutput;

    private TextView PlayerTwoHealthOutput;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        playerOneHealth = 20;

        playerTwoHealth = 20;

        PlayerOneHealthOutput = (TextView) findViewById(R.id.playerOneHealth);

        PlayerTwoHealthOutput = (TextView) findViewById(R.id.playerTwoHealth);

        Button playerOnePlusButtonVar = (Button) findViewById(R.id.playerOnePlus);

        Button playerOneMinusButtonVar = (Button) findViewById(R.id.playerOneMinus);

        Button playerTwoPlusButtonVar = (Button) findViewById(R.id.playerTwoPlus);

        Button playerTwoMinusButtonVar = (Button) findViewById(R.id.playerTwoMinus);

        Button restartButtonVar = (Button) findViewById(R.id.restartButton);

        restartButtonVar.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                playerOneHealth = 20;

                playerTwoHealth = 20;

                PlayerOneHealthOutput.setText(String.valueOf(playerOneHealth));

                PlayerTwoHealthOutput.setText(String.valueOf(playerTwoHealth));

            }
        });
        playerOnePlusButtonVar.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                if(playerOneHealth <= 999 && playerTwoHealth <= 999) {

                    playerOneHealth += 1;

                    PlayerOneHealthOutput.setText(String.valueOf(playerOneHealth));

                }

            }
        });
        playerOneMinusButtonVar.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                if(playerOneHealth > 0) {

                    playerOneHealth -= 1;

                    PlayerOneHealthOutput.setText(String.valueOf(playerOneHealth));

                }
            }
        });
        playerTwoPlusButtonVar.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

            if(playerOneHealth <= 999 && playerTwoHealth <= 999) {

                playerTwoHealth += 1;

                PlayerTwoHealthOutput.setText(String.valueOf(playerTwoHealth));

            }

            }
        });
        playerTwoMinusButtonVar.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {

                if(playerTwoHealth > 0) {

                    playerTwoHealth -= 1;

                    PlayerTwoHealthOutput.setText(String.valueOf(playerTwoHealth));
                }
            }
        });
    }

}
