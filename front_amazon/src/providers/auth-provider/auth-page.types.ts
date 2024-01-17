import { NextPage } from "next"

export type TypeRoles = {
    isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<PageTransitionEvent> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles}